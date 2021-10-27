import React from "react";

function Service() {
  return (
    <>
      <section className="">
        <div id="wrapper">
          <div>
            <h2>Create A Service</h2>
          </div>

          <form className="border w-96 p-1 rounded-md">
            <div className="m-1">
              <label for="service">Service Name:</label>
              <input
                id="service"
                type="text"
                className="border-1 border-black ml-2"
              ></input>
            </div>
            <div className="m-1">
              <label for="duration">Duration:</label>
              <input
                id="duration"
                type="text"
                className="border-1 border-black ml-2"
              ></input>
            </div>
            <div className="m-1">
              <label for="time">Appoinment Time:</label>
              <input id="time" type="text" className="border-1 border-black ml-2"></input>
            </div>
            <div>
              <label for="price">Price:</label>
              <input id="price" className="border-1 border-black ml-2"></input>
            </div>
            <div>
              <label for="users">Select Stylist:</label>
              <select name="users" className="rounded-md border mt-2 ml-2">
                <option> Roz</option>
                <option> Kelly </option>
                <option> Paterna </option>
                <option> Jody </option>
              </select>
            </div>
            <button className="border p-1 rounded-lg bg-blue-800 text-white font-bold hover:bg-blue-400">
              Add Service
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
 export default Service;
