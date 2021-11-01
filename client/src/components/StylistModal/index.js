import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_UPDATE_STYLIST_INFO } from "../../utils/mutations";

function StylistModal() {
  const [showModal, setShowModal] = useState(false);
  const [stylistState, setStylistState] = useState({
    certifications: "",
  });

  const [addUpdateStylistInfo] = useMutation(ADD_UPDATE_STYLIST_INFO);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    await addUpdateStylistInfo({
        variables: {
        certifications: stylistState.certifications
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStylistState({
      ...stylistState,
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
        UPDATE STYLIST PROFILE
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
                    UPDATE STYLIST PROFILE
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
                      <label className=" font-bold" htmlFor="certifications">
                        Certifications
                      </label>
                      <input
                        name="certifications"
                        className="border-1 border-black ml-1 rounded"
                        placeholder="Natural Hair"
                        type="text"
                        id="certifications"
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

export default StylistModal;
