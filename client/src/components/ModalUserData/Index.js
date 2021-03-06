import React from "react";
import {ADD_UPDATE_USER_PROFILE} from "../../utils/mutations"
import { useState } from "react";
import { useMutation } from "@apollo/client";



export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "", 
    address: "", 
    city: "", 
    zipCode: "", 
  });
  const [addUpdateUser] = useMutation(ADD_UPDATE_USER_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    
    await addUpdateUser({
      variables: {

        profileInput: {firstName: formState.firstName,
        lastName: formState.lastName,
        phoneNumber: formState.phoneNumber,
        address: formState.address,
        city: formState.city,
        zipCode: formState.zipCode}
      },
    });
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
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        UPDATE USER PROFILE
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update User Information
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ??
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleFormSubmit} className="p-3 rounded shadow">
                    <div>
                      <label className=" font-bold" htmlFor="firstName">
                        First Name:
                      </label>
                      <input
                        name="firstName"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="First Name"
                        type="text"
                        id="firstName"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label className=" font-bold" htmlFor="lastName">
                        Last Name:
                      </label>
                      <input
                        name="lastName"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="Last Name"
                        type="text"
                        id="lastName"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label className=" font-bold" htmlFor="phoneNumber">
                        Contact Number:
                      </label>
                      <input
                        name="phoneNumber"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="phoneNumber"
                        type="text"
                        id="phoneNumber"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label className=" font-bold" htmlFor="address">
                        Address:
                      </label>
                      <input
                        name="address"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="Address"
                        type="text"
                        id="address"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-2">
                      <label className=" font-bold" htmlFor="city">
                        City:
                      </label>
                      <input
                        name="city"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="City"
                        type="text"
                        id="city"
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="mt-2">
                      <label className=" font-bold" htmlFor="address">
                        State:
                      </label>
                      <input
                        name="state"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="State"
                        type="state"
                        id="state"
                      />
                    </div> */}
                    <div className="mt-2">
                      <label className=" font-bold" htmlFor="zipCode">
                        Zip Code:
                      </label>
                      <input
                        name="zipCode"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="Zip Code"
                        type="text"
                        id="zipCode"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-2">
                        <button className="bg-blue-600 px-4 py-1 rounded text-white font-bold hover:bg-blue-800 mt-2">Submit</button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className=" text-black bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
