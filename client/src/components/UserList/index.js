import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_STYLISTS} from "../../utils/queries"
function UserList() {
  const {data: userData} = useQuery(GET_ALL_STYLISTS);
  const fullData = userData;;

// console.log(fullData.getAllStylists);
  return (
    <>
      <div className="w-3/12 bg-white opacity-90 p-2 shadow-lg rounded-lg">
         <h2 className="text-center font-bold text-pink-600"> All Active Clients</h2>
            <div className="border rounded-lg p-2">
             <span>Username:<p> Akeem</p></span>
             <span>Username:<p> Akeem</p></span>
             <span>Username:<p> Akeem</p></span>
             <span>Username:<p> Akeem</p></span>
            </div>
      </div>
    </>
  );
}
export default UserList;