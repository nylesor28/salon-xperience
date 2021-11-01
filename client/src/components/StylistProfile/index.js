import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_STYLIST_FULL_PROFILE_INFO } from "../../utils/queries";
import StylistModal from "../StylistModal";



function StylistProfile() {



  const  {data}  = useQuery(GET_STYLIST_FULL_PROFILE_INFO);
  const fullStylistData = data?.getStylistInfo;

  return (
    
          <div
            id="stylist-profile"
            className="border rounded w-2/6 p-2 shadow bg-white"
          >
            <h2 className="text-center text-white bg-pink-500 rounded-lg animate-pulse mt-2">
              {" "}
              STYLIST PROFILE
            </h2>
            <table className="mb-4">
              <tr>
                <td className="font-bold text-lg">Certifications:</td>
                <td>{fullStylistData?.certifications}</td>
              </tr>
            </table>
            <div>
              <StylistModal />
            </div>
          </div>

    
  );
}
export default  StylistProfile;
