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
            type="text"
            name="serviceName"
            className="border-1 border-black ml-2"
          ></input>
        </div>
        <div className="m-1 flex">
          <label  htmlFor="duration">Duration:</label>
          <div className="flex">
          <input
            id="hours"
            placeholder="hh"
            type="text"
            name="hours"
            className="border-1 border-black ml-2 w-28"
          ></input>
          <input
            id="minutes"
            placeholder="mm"  
            type="text"
            name="minutes"
            className="border-1 border-black ml-2 w-28"
          ></input>
          </div>
        </div>
        <div className="m-1">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            type="text"
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
