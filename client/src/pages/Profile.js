import React from "react";
import profilepic from "../assets/images/jomboimg.jpg";
import Modal from "../components/ModalUserData/Index";
import StylistAppointment from "../components/StylistAppointment";

function Profile() {
  return (
    <>
      <h1>ALLEN'S PROFILE</h1>
      <section>
        <div className="flex justify-between"> 
          <div className="flex border rounded m-1 w-2/6 shadow">
            <div id="profile-img" className="w-80 h-80 pt-2">
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
              <Modal />
              {/* <button className="bg-blue-400 p-1 rounded-lg text-white font-bold hover:bg-blue-800 mt-2">Update Info</button> */}
            </div>
          </div>
          <div id="hair-profile" className="border rounded w-1/6 p-2 shadow">
            <h2 className="text-center">HAIR PROFILE</h2>
            <table className="mb-4">
              <tr>
                <td className="font-bold text-lg">Hair Type:</td>
                <td>Natrual</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Hair Length:</td>
                <td>12 Inches</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Hair State:</td>
                <td>Perm</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Hair Damage:</td>
                <td> None</td>
              </tr>
            </table>
          </div>
        </div>

        <div>
          <div id="bookingList">
            <h2 className="text-center pb-2"> SCHEDULED BOOKINGS</h2>
            <div className="flex justify-evenly">
              <StylistAppointment />
              <StylistAppointment />
              <StylistAppointment />
              <StylistAppointment />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
