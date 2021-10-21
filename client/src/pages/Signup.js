import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
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
    <section className="flex justify-center">
    <div className="border-2 rounded-md w-3/12 m-4 p-2 shadow-lg">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="">
          <label className="font-bold" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="ml-2 border-1 border-black rounded"
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="my-1">
          <label className="font-bold" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="ml-2 border-1 border-black rounded"
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="my-1">
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
        <div className="my-1">
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
