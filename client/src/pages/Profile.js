import React from "react";
import profilepic from "../assets/images/jomboimg.jpg"
import Modal from "../components/ModalUserData/Index"

function Profile() {
  return (
    <>
      <h1>Kelly's Profile</h1>
      <section>
        <div className="flex border rounded m-1">
          <div id="profile-img" className="w-60 pt-2">
            <img
              className="w-full rounded-lg"
              src={profilepic}
              alt="placeholder image"
            />
          </div>
          <div className="ml-4" id="profile-data">
            <table className="mb-4">
              <tr>
                <td className="font-bold text-lg">Name:</td>
                <td>Allen Brown</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Contact:</td>
                <td>(203) 548-5041</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Address:</td>
                <td>150 Davie Drive, New Haven CT 06401</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">City:</td>
                <td> New Haven</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">State:</td>
                <td>CT</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Zip Code:</td>
                <td>06508</td>
              </tr>
            </table>
            <Modal/>
            {/* <button className="bg-blue-400 p-1 rounded-lg text-white font-bold hover:bg-blue-800 mt-2">Update Info</button> */}
          </div>
        </div>

      
      </section>
    </>
  );
}
export default Profile;