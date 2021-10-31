import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CLIENT_FULL_PROFILE_INFO } from "../../utils/queries";
import HairModal from "../HairModal";


function HairProfile() {



  const { data: hairData } = useQuery(GET_CLIENT_FULL_PROFILE_INFO);
  const fullHairData = hairData?.getClientInfo?.hairProfile;


  console.log(fullHairData);
  return (
    
          <div
            id="hair-profile"
            className="border rounded w-2/6 p-2 shadow bg-white"
          >
            <h2 className="text-center text-white bg-pink-500 rounded-lg animate-pulse mt-2">
              {" "}
              HAIR PROFILE
            </h2>
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
            <div>
              <HairModal />
            </div>
          </div>

    
  );
}
export default  HairProfile;
