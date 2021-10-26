import React from "react";
import Service from "../components/Service";
import { useState } from "react";
import UserList from "../components/UserList";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Admin() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        <div id="wrapper" className="">
          <div>
            <h2>Create User</h2>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="border w-96 p-1 rounded-md"
          >
            <div className="m-1">
              <label htmlFor="username">User Name:</label>
              <input
                id="username"
                type="username"
                name="username"
                className="border-1 border-black ml-2"
                onChange={handleChange}
              ></input>
            </div>
            <div className="m-1">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                className="border-1 border-black ml-2"
                onChange={handleChange}
              ></input>
            </div>
            <div className="m-1">
              <label htmlFor="password">Create password:</label>
              <input
                onChange={handleChange}
                id="pwd"
                name="password"
                type="password"
                className="border-1 border-black ml-2"
              ></input>
            </div>
            <div>
              <label htmlFor="users">User Type:</label>
              <select
                id="userType"
                htmlFor="userType"
                onChange={handleChange}
                name="userType"
                className="rounded-md border mt-2 ml-2"
              >
                <option> admin</option>
                <option> stylist </option>
                <option> client </option>
              </select>
            </div>
            <button className="border p-1 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-400">
              Create User
            </button>
          </form>
        </div>
        <Service />
        <UserList />
      </section>
    </>
  );
}

export default Admin;
