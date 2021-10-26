import React from "react";

function CreateService() {
  return (
    <div>
      <h2 className="text-center font-bold text-white">Choose a Service</h2>
      <form
        // onSubmit={handleFormSubmit}
        className="border w-96 p-1 rounded-md bg-white opacity-90 p-2 shadow-lg"
      >
        <div className="m-1">
          <label htmlFor="serviceName">Service Name:</label>
          <input
            id="serviceName"
            type="serviceName"
            name="serviceName"
            className="border-1 border-black ml-2"
          ></input>
        </div>
        <div className="m-1">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="border-1 border-black ml-2"
          ></input>
        </div>
        <div className="m-1">
          <label htmlFor="password">Create password:</label>
          <input
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
            name="userType"
            className="rounded-md border mt-2 ml-2"
          >
            <option> admin</option>
            <option> stylist </option>
            <option> client </option>
          </select>
        </div>
        <button className="border p-1 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-400">
          Create Service
        </button>
      </form>
    </div>
  );
}

export default CreateService;
