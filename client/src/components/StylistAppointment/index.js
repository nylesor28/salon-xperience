import React from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import plc from "../../assets/images/jomboimg.jpg";

function StylistAppointment(props) {
  const{data: clientData }=useQuery(GET_APPOINTMENT_BY_CLIENT_ID)
  const {data: appointmentData} = useQuery()
  const appointmentData = userData?.getUserProfile?.appointnment;

  return (
    <Card style={{ width: "24rem", height: "auto" }}>
      <Card.Title className="bg-pink-500 p-1 rounded mt-1 text-white border-2">{appointmentData.clientId}</Card.Title>
      <ListGroup horizontal className="">
        <ListGroupItem className="font-bold">Stylist: {appointmentData.stylistId}</ListGroupItem>
        <ListGroupItem>{appointmentData.stylistID}</ListGroupItem>
      </ListGroup>
      <ListGroup horizontal className="">
        <ListGroupItem className="font-bold">Service:{appointmentData.serviceId}</ListGroupItem>
        <ListGroupItem>Wash and Set</ListGroupItem>
      </ListGroup>
      {/* <ListGroup horizontal className=""> */}
        {/* <ListGroupItem className="font-bold">Date:{appointmentData.}</ListGroupItem>
        <ListGroupItem>Monday, June 21, 2021</ListGroupItem>
      </ListGroup> */}
      <ListGroup horizontal className="">
        <ListGroupItem className="font-bold">Time:{appointmentData.startTime} - {appointmentData.endTime}</ListGroupItem>
        <ListGroupItem>10:00 AM</ListGroupItem>
      </ListGroup>
      <ListGroup horizontal className="">
        <ListGroupItem className="font-bold">Price:</ListGroupItem>
        <ListGroupItem>$150</ListGroupItem>
      </ListGroup>
      <Card.Body className="mt-2">
        <Button onClick={""} variant="danger">
          Delete Booking
        </Button>
        <Button className=" ml-2" variant="primary">
          Update Booking
        </Button>
      </Card.Body>
    </Card>
  );
}

export default StylistAppointment;
