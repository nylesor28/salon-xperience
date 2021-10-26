import React from "react";
import profilepic from "../assets/images/jomboimg.jpg";
import Modal from "../components/ModalUserData/Index";
import StylistAppointment from "../components/StylistAppointment";
import Passwod_Update from "../components/UpdatePassword";
import { Redirect, useParams } from "react-router-dom";
import { GET_USER_PROILE } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import Auth from "../utils/auth"


function Profile() {
  const { data: userParam } = useParams();
  const {data: userData} = useQuery(GET_USER_PROILE);
  const fullData = userData;;
  // const { loading, data } = useQuery(
  //   userParam ? GET_USER_PROILE : GET_USER_PROFILE,
  //   {
  //     variables: { userData: userParam },
  //   }
  // );
  // const user = data?.me || {};

  // if (
  //   Auth.loggedIn() &&
  //   Auth.getProfile().data.username === userParam
  // ) {
  //   return <Redirect to="/profile" />;
  // }
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
console.log(fullData)
// console.log(fullData.getUserProfile.userProfile.firstName)
// {fullData.firstName}
  return (
    <>
      <h1 className="text-pink-600"> PROFILE</h1>
      <section>
        <div className="flex justify-between">
          <div className="flex border rounded m-1 w-7/12 shadow">
            <div id="profile-img" className="w-80  p-1">
              <img
                className="w-80 h-80 rounded-lg"
                src={profilepic}
                alt="profile image"
              />
            </div>
            <div className="ml-4" id="profile-data">
              <table className="mb-2 bg-white m-1 rounded opacity-70">
                <tr>
                  <td className="font-bold text-lg pl-2">Name:</td>
                  <td>Allen Brown</td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">Contact:</td>
                  <td>(203) 548-5041</td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">Address:</td>
                  <td>150 Davie Drive, New Haven CT 06401</td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">City:</td>
                  <td> New Haven</td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">State:</td>
                  <td>CT</td>
                </tr>
                <tr>
                  <td className="font-bold text-lg pl-2">Zip Code:</td>
                  <td>06508</td>
                </tr>
              </table>
              <Modal />
              <Passwod_Update />
              {/* <button className="bg-blue-400 p-1 rounded-lg text-white font-bold hover:bg-blue-800 mt-2">Update Info</button> */}
            </div>
          </div>
          <div
            id="hair-profile"
            className="border rounded w-2/6 p-2 shadow opacity-70 bg-white"
          >
            <h2 className="text-center text-pink-600">HAIR PROFILE</h2>
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
