import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <Link className="font-bold text-lg no-underline" to="/signup">👈 Signup Here</Link>

        <h2 className="font-bold text-center text-pink-600">Login</h2>
        <form onSubmit={handleFormSubmit} className="border-1 rounded p-2 border-pink-500">
          <div className="flex-row space-between my-2 text-black">
            <label className="font-bold" htmlFor="email">
              Email address:
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
          <div className="flex-row space-between my-2 text-black">
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
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex-row flex-end">
            <button
              className="border-2 p-1 rounded-lg bg-blue-400 hover:bg-blue-800 text-white font-bold text-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
