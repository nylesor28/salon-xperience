import React from "react";
import Service from "../components/Service.js";
import UserList from "../components/UserList/index.js";

function Admin() {
  return (
    <>
      <section className="flex justify-between p-4">
        <div id="wrapper" className="">
          <div>
            <h2>Create User</h2>
          </div>

          <form className="border w-96 p-1 rounded-md">
            <div className="m-1">
              <label for="name">Name:</label>
              <input
                id="name"
                type="text"
                className="border-1 border-black ml-2"
              ></input>
            </div>
            <div className="m-1">
              <label for="email">Email:</label>
              <input
                id="email"
                type="text"
                className="border-1 border-black ml-2"
              ></input>
            </div>
            <div className="m-1">
              <label for="password">Create password:</label>
              <input type="text" className="border-1 border-black ml-2"></input>
            </div>
            <div>
              <label for="users">User Type:</label>
              <select name="users" className="rounded-md border mt-2 ml-2">
                <option> Admin</option>
                <option> Stylist </option>
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
