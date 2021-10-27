import React from "react";
import img2 from "../../assets/images/jomboimg.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SERVICES } from "../../utils/queries";
import { Button } from "react-bootstrap";

function Styler() {
  const { data: userData } = useQuery(QUERY_ALL_SERVICES);
  const serviceData = userData?.getAllServices;

  console.log(serviceData);

  return (
    <section className="flex justify-evenly">
      {serviceData &&
        serviceData.map((service) => (
          <div>
            <div id="card" className="border-2 border-pink-500 w-76 p-2 m-2 rounded-lg bg-white opacity-90">
              <div id="card-title">
                <h3 className="text-center">{service.serviceName}</h3>
              </div>
              <div id="card-image">
                <img className="h-32 rounded border-1 border-pink-500" src={img2} alt="Logo" />
              </div>
              <table className="">
                <tr>
                  <td className="font-bold">SERVICE: </td>
                  <td className="font-semibold pl-4">{service.serviceName}</td>
                </tr>
                <tr>
                  <td className="font-bold">PRICE:</td>
                  <td className="font-semibold pl-4">${service.price}</td>
                </tr>
                <tr>
                  <td className="font-bold">TIME:</td>
                  <td className="font-semibold pl-4">
                    {service.duration.hour} HOURS & {service.duration.minute}{" "}
                    MINS
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">RATING</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
              </table>
              <button onClick="submit" className=" bg-blue-600 p-1 rounded-lg text-white font-bold hover:bg-blue-800 mt-2">Book Now</button>
            </div>
          </div>
        ))}
    </section>
  );
}
export default Styler;

// import {CardGroup} from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Button from 'react';
// import React,{ useState } from 'react'
// class ServiceCard extends React.Component {
//     render() {
//       return (
// <CardGroup>
//   <Card>
//     <Card.Img variant="top" src={servicecard.image} />
//     <Card.Body>
//       <Card.Title>{servicecard.stylist}</Card.Title>
//       <Card.Text>
//       {servicecard.description}
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   {/* <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>{servicecardcard.stylist}</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card> */}
// </CardGroup>
//       );
// }
// }
// export default ServiceCard;
