import React from "react";
import profilepic from "../assets/images/jomboimg.jpg";
import Modal from "../components/ModalUserData/Index";
import StylistAppointment from "../components/StylistAppointment";
import Passwod_Update from "../components/UpdatePassword";
import { GET_USER_PROILE } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CLIENT_FULL_PROFILE_INFO } from "../utils/queries";
import HairModal from "../components/HairModal";
import HairProfile from "../components/HairProfile";
import StylistProfile from "../components/StylistProfile";
import Auth from "../utils/auth"

function Profile() {
  const { data: userData } = useQuery(GET_USER_PROILE);
  const fullData = userData?.getUserProfile?.userProfile;


  console.log(fullData);
  // console.log(fullHairData);
  return (
    <>
      <h1 className="tileheading text-white bg-pink-500  w-3/12 text-center mt-2 rounded-lg border-2 animate-pulse">
        {fullData?.firstName}`s Profile
      </h1>
      <section>
        <div className="flex justify-between ">
          <div className="flex border rounded m-1 w-7/12 shadow p-2">
            <div id="profile-img" className="w-80  p-1">
              <img
                className="w-80 h-52 rounded-lg"
                src={profilepic}
                alt="profile image"
              />
            </div>
            <div className="ml-4" id="profile-data">
              <table className="mb-2 bg-pink-500 text-white m-1 rounded opacity-90 w-full">
                <tr>
                  <td className="font-bold text-lg pl-2">Name:</td>
                  <td>
                    {fullData?.firstName} {fullData?.lastName}
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">Contact:</td>
                  <td>{fullData?.phoneNumber}</td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">Address:</td>
                  <td>{fullData?.address} </td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">City/State:</td>
                  <td> {fullData?.city}</td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">Zip Code:</td>
                  <td>{fullData?.zipCode}</td>
                </tr>
              </table>
              <Modal />
              <Passwod_Update />
              {/* <button className="bg-blue-400 p-1 rounded-lg text-white font-bold hover:bg-blue-800 mt-2">Update Info</button> */}
            </div>
          </div>
          {Auth.loggedIn() && Auth.isClient() ? (
          <HairProfile />): null}

      {Auth.loggedIn() && Auth.isStylist() ? (
          <StylistProfile />): null}
        </div>

        <div className="mt-4">
          <div id="bookingList">
            <h2 className="text-center text-pink-500 pb-2">
              {" "}
              SCHEDULED BOOKINGS
            </h2>
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
