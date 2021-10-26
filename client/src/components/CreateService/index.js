import React from "react";

function CreateService() {
  return (
    <div>
      <h2 className="text-center font-bold text-white">Create A Service</h2>
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
          <label htmlFor="duration">Duration:</label>
          <input
            id="duration"
            type="duration"
            name="duration"
            className="border-1 border-black ml-2"
          ></input>
        </div>
        <div className="m-1">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            type="price"
            className="border-1 border-black ml-2"
          ></input>
        </div>
        <button className="border p-1 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-400">
          Create Service
        </button>
      </form>
    </div>
  );
}

export default CreateService;
