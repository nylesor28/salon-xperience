import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({username: "", email: "", password: "" });
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
    <section className="flex justify-center py-28">
    <div className="rounded-lg w-3/12 m-4 p-4 shadow-lg bg-white border-2 border-pink-500">
      <Link className="font-bold text-lg no-underline" to="/login">👈 Go to Login</Link>

      <h2 className="text-pink-600 font-bold text-center">Signup Now!</h2>
      <form onSubmit={handleFormSubmit} className="border-1 rounded p-2 border-pink-500">
        <div className="text-black">
          <label className="font-bold" htmlFor="username">
            Username:
          </label>
          <input
            className="ml-2 border-1 border-black rounded"
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="my-1 text-black">
          <label className="font-bold" htmlFor="email">
            User Email:
          </label>
          <input
            className="ml-2 border-1 border-black rounded"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="my-1 text-black">
          <label className="font-bold" htmlFor="pwd">
            Password:
          </label>
          <input
            className="ml-2 border-1 border-black rounded"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button className="border-2 p-1 rounded-lg bg-blue-400 hover:bg-blue-800 text-white font-bold text-lg" type="submit">Submit</button>
        </div>
      </form>
    </div>
    </section>
  );
}

export default Signup;
