import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_SERVICES } from "../../utils/queries";
import { EXPIRE_SERVICE } from "../../utils/mutations";
function UserList() {
  const { data: userData } = useQuery(QUERY_ALL_SERVICES);
  const fullData = userData?.getAllServices;
  const [deleteService, { error }] = useMutation(EXPIRE_SERVICE);


      


  const handleDelete = async (event) => {
    const _id = event.target.id;
    console.log(_id);
    try {
      await deleteService({
        variables: {
          _id,
        },
        refetchQueries: [{ query: QUERY_ALL_SERVICES }],
      });
    } catch (error) {
      console.log(error);
    }
    alert("Service Deleted");
  };


  console.log(fullData);
  return (
    <>
      <div className="w-3/12 bg-white opacity-95 p-2 shadow-lg rounded-lg">
        <h2 className="text-center font-bold text-pink-600">
          {" "}
          All Active Services
        </h2>
        {fullData &&
          fullData.map((service) => (
            <div className="border-2 rounded-lg p-1">
              <div className="border pl-4 pt-1 rounded shadow opacity-80">
                <div className="flex ">
                  <p className="font-bold"> Service Name: </p>
                  <p className="pl-4"> {service.serviceName}</p>
                </div>
                <div className="flex ">
                  <p className="font-bold"> Service Price: </p>
                  <p className="pl-4"> ${service.price}</p>
                </div>
                <div className="flex ">
                  <p className="font-bold"> Duration: </p>
                  <p className="pl-4">
                    {" "}
                    {service.duration.hour} HOUR {service.duration.minute} MINS
                  </p>
                </div>
                <button
                  id={service._id}
                  onClick={handleDelete}
                  className="bg-red-400 text-white font-bold p-1 mb-2 rounded mt-2 border-2 shadow hover:bg-red-900"
                >
                  Delete Service
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default UserList;
