import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_UPDATE_CLIENT_INFO } from "../../utils/mutations";

function HairModal() {
  const [showModal, setShowModal] = useState(false);
  const [hairState, setHairState] = useState({
    hairType: "",
    hairGoal: "",
    hairState: "",
  });

  const [updateHairProfile] = useMutation(ADD_UPDATE_CLIENT_INFO);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    await updateHairProfile({
        variables: {
        hairProfileInput: {
        hairType: hairState.hairType,
        hairGoal: hairState.hairGoal,
        hairState: hairState.hairState
        }
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHairState({
      ...hairState,
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
        UPDATE HAIR PROFILE
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
                    UPDATE HAIR PROFILE
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleFormSubmit}
                    className="p-3 rounded shadow"
                  >
                    <div className="mb-1">
                      <label className=" font-bold" htmlFor="hairGoal">
                        Hair Goal
                      </label>
                      <input
                        name="hairGoal"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="Growth, Length"
                        type="text"
                        id="hairGoal"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label className=" font-bold" htmlFor="hairType">
                        Hair Type
                      </label>
                      <input
                        name="hairType"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="Hair Type"
                        type="text"
                        id="hairType"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className=" font-bold" htmlFor="hairState">
                        Hair State
                      </label>
                      <input
                        name="hairState"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="Hair State"
                        type="text"
                        id="hairState"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mt-2">
                      <button className="bg-blue-600 px-4 py-1 rounded text-white font-bold hover:bg-blue-800 mt-2">
                        Submit
                      </button>
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

export default HairModal;
