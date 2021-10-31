import React from "react";
import img2 from "../../assets/images/jomboimg2.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SERVICES } from "../../utils/queries";
import { Button } from "react-bootstrap";

function Styler() {
  const { data: userData } = useQuery(QUERY_ALL_SERVICES);
  const serviceData = userData?.getAllServices;

  console.log(serviceData);

  const handleFormSubmit = async (event) => {
    const btn = document.getElementById("btn");
    const tableEl = document.querySelector("table");
    event.preventDefault();
    btn.addEventListener("click", (event) => {
      // const service = {
      //   serviceName = serviceName,
      //   durationInput: {
      //     hour: hour,
      //     minute: minutes
      //   },
      //   price: price
      // }
      // if (event.target.matches === ("button")) {
      //   const id = event.target.getAttribute("data-id");
      //   const name = event.target.getAttribute("data-name");
      //   const price = event.target.getAttribute("data-price");
      //   const description = event.target.getAttribute("data-description");
      //   const duration = event.target.getAttribute("data-duration");
      //   const image = event.target.getAttribute("data-image");
      //   const service = {
      //     id,
      //     name,
      //     price,
      //     description,
      //     duration,
      //     image,
      //   };
      console.log(tableEl);
      // }
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="tileheading font-bold text-center text-white w-2/6 bg-pink-500 p-1 rounded-lg border-2 mt-4 animate-bounce">
          SERVICES AVAILABLE
        </h1>
      </div>
      <section className="flex justify-evenly">
        {serviceData &&
          serviceData.map((service) => (
            <div>
              <div
                id="card"
                className="border-2 border-pink-500 w-76 p-2 m-2 rounded-lg bg-white opacity-90"
              >
                <div id="card-title">
                  <h3 className="text-center">{service.serviceName}</h3>
                </div>
                <div id="card-image">
                  <img
                    className="h-32 rounded border-1 border-pink-500"
                    src={img2}
                    alt="Logo"
                  />
                </div>
                <table className="">
                  <tr>
                    <td className="font-bold">SERVICE: </td>
                    <td id="serviceName" className="font-semibold pl-4">
                      {service.serviceName}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">PRICE:</td>
                    <td id="price" className="font-semibold pl-4">
                      ${service.price}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">TIME:</td>
                    <td id="hour" className="font-semibold pl-4">
                      {service.duration.hour} HOURS
                    </td>
                    <td id="minutes" className="font-semibold">
                      {service.duration.minute}
                      MINS
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">RATING</td>
                    <td className="pl-4">⭐⭐⭐⭐⭐</td>
                  </tr>
                </table>
                <button
                  id="btn"
                  onClick={handleFormSubmit}
                  className="animate-pulse bg-blue-600 p-1 rounded-lg text-white font-bold hover:bg-blue-800 mt-2"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
export default Styler;
