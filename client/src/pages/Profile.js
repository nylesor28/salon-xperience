import React from "react";
import profilepic from "../assets/images/jomboimg.jpg";
import Modal from "../components/ModalUserData/Index";
import StylistAppointment from "../components/StylistAppointment";
import Passwod_Update from "../components/UpdatePassword";
// import { Redirect, useParams } from "react-router-dom";
import { GET_USER_PROILE } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import {GET_CLIENT_FULL_PROFILE_INFO} from "../utils/queries";


function Profile() {
  // const { data: userParam } = useParams();
  const {data: userData} = useQuery(GET_USER_PROILE);
  const fullData = userData?.getUserProfile?.userProfile;
  const {data: hairData} = useQuery(GET_CLIENT_FULL_PROFILE_INFO);
  const fullHairData = hairData?.getClientInfo?.hairProfile;
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
console.log(fullHairData)
// console.log(fullData.getUserProfile.userProfile.firstName)
// {fullData.firstName}
  return (
    <>
      <h1 className="tileheading text-white bg-pink-500  w-3/12 text-center mt-2 rounded-lg border-2 animate-pulse">{fullData?.firstName}`s Profile</h1>
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
                  <td>{fullData?.firstName} {fullData?.lastName}</td>
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
          <div
            id="hair-profile"
            className="border rounded w-2/6 p-2 shadow opacity-70 bg-white"
          >
            <h2 className="text-center text-white bg-pink-500 rounded-lg animate-pulse mt-2"> HAIR PROFILE</h2>
            <table className="mb-4">
              <tr>
                <td className="font-bold text-lg">Hair Goal:</td>
                <td>{fullHairData?.hairGoal}</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Hair Type:</td>
                <td>{fullHairData?.hairType}</td>
              </tr>
              <tr>
                <td className="font-bold text-lg">Hair State:</td>
                <td>{fullHairData?.hairState}</td>
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
