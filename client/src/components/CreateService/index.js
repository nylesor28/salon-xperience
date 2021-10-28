import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_SERVICE } from "../../utils/mutations";


function CreateService() {

  const [formState, setFormState] = useState({
    serviceName: "",
    hours: 0,
    minutes: 0,
    price:0.00
  });
  const [addService] = useMutation(ADD_SERVICE);

  const handleFormSubmit= async (e) => {
    e.preventDefault();  
      
    await addService({
      variables:{serviceName: formState.serviceName,
              durationInput: {
                hour: parseInt(formState.hours),
                minute: parseInt(formState.minutes)
              },
              price:formState.price
            }
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    
  return (
    <div>
      <h2 className="text-center font-bold bg-pink-500 rounded-lg border-2 text-white">Create A Service</h2>
      <form
        onSubmit={handleFormSubmit}
        className="w-96 p-1 rounded-md bg-white opacity-80 p-2 border-2 border-pink-500 shadow-lg"
      >
        <div className="m-1">
          <label className="font-bold" htmlFor="serviceName">Service Name:</label>
          <input
            id="serviceName"
            type="text"
            name="serviceName"
            className="border-1 border-black ml-2 rounded"
            onChange={handleChange}
          ></input>
        </div>
        <div className="m-1 flex">
          <label className="font-bold" htmlFor="duration">Duration:</label>
          <div className="flex">
          <input
            id="hours"
            placeholder="hh"
            type="text"
            name="hours"
            className="border-1 border-black ml-2 w-28 rounded"
            onChange={handleChange}
          ></input>
          <input
            id="minutes"
            placeholder="mm"  
            type="text"
            name="minutes"
            className="border-1 border-black ml-2 w-28 rounded"
            onChange={handleChange}
          ></input>
          </div>
        </div>
        <div className="m-1">
          <label className="font-bold" htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            type="text"
            className="border-1 border-black ml-2 rounded"
            onChange={handleChange}
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
