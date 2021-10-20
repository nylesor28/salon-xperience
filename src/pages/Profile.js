import React from "react";

function Profile() {
  return (
    <>
      <h1>Kelly's Profile</h1>
      <section>
        <div className="flex">
          <div id="profile-img" className="w-60 pt-2">
            <img
              className="w-full rounded-lg"
              src="../assets/images/pic2.jpg"
              alt="placeholder image"
            />
          </div>
          <div className="ml-4" id="profile-data">
            <table>
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
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
