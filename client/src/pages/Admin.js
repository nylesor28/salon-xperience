import React from "react";
import CreateService from "../components/CreateService";
import { useState } from "react";
import UserList from "../components/UserList";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

function Admin() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.target.reset()
    await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        role: formState.userType
      },
    });

  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <section className="flex justify-between p-4">
        <div id="wrapper">
          <div>
            <h2 className="text-center font-bold bg-pink-500 rounded-lg border-2 text-white">Create A User</h2>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="border-2 border-pink-500 w-96 p-1 rounded-md bg-white opacity-80 p-2 shadow-lg"
          >
            <div className="m-1">
              <label className="font-bold" htmlFor="username">User Name:</label>
              <input
                id="username"
                type="username"
                name="username"
                className="border-1 border-black ml-2 rounded"
                onChange={handleChange}
              ></input>
            </div>
            <div className="m-1">
              <label className="font-bold" htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                className="border-1 border-black ml-2 rounded"
                onChange={handleChange}
              ></input>
            </div>
            <div className="m-1">
              <label className="font-bold" htmlFor="password">Create password:</label>
              <input
                onChange={handleChange}
                id="pwd"
                name="password"
                type="password"
                className="border-1 border-black ml-2 rounded"
              ></input>
            </div>
            <div>
              <label className="font-bold" htmlFor="users">User Type:</label>
              <select
                id="userType"
                htmlFor="userType"
                onChange={handleChange}
                name="userType"
                className="rounded-md border mt-2 ml-2"
              >
                <option value="placeholder"> </option>
                <option value="admin"> admin</option>
                <option value="stylist"> stylist </option>
                <option value="client"> client </option>
              </select>
            </div>
            <button className="border-2 mt-2 p-1 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-400">
              Create User
            </button>
          </form>
        </div>
        <CreateService />
        <UserList />
      </section>
    </>
  );
}

export default Admin;
