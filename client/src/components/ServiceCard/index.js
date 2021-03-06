import React from "react";
import img2 from "../../assets/images/jomboimg.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SERVICES } from "../../utils/queries";
import { Button } from "react-bootstrap";



import {CardGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react';
import React,{ useState } from 'react'
class ServiceCard extends React.Component {
    render() {
      return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src={servicecard.image} />
    <Card.Body>
      <Card.Title>{servicecard.stylist}</Card.Title>
      <Card.Text>
      {servicecard.description}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  {/* <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{servicecardcard.stylist}</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> */}
</CardGroup>
      );
}
}
export default ServiceCard;
