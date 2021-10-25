import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FormGroup } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
// import { FormGroup } from "react-bootstrap";

class ClientForm extends React.Component {
    render() {
      return (
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Connecticut</option>
        <option>Massachusetts</option>
        <option>New York</option>
        <option>Rhode Island</option>
        <option>Vermont</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Hair Regiment</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Hair Type</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option> 1-Straight</option>
        <option>2A-Thin Wavy</option>
        <option>2B-Medium Wavy</option>
        <option>2C-Thick Wavy</option>
        <option>3A-loose Curls</option>
        <option>3B-medium Curls</option>
        <option>3C-tight Curls</option>
        <option>4A-Soft</option>
        <option>4B-Wiry</option>
        <option>4C-Extremely Wiry</option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Current State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Keratin Treated</option>
        <option>Natural</option>
        <option>Perm</option>
        <option>Protective Style</option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Style goal</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Stylist</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Akeem</option>
        <option>Emilia</option>
        <option>Eva</option>
        <option>Jurnee</option>
        <option>Maya</option>
        <option>Roz</option>
      </Form.Select>
    </Form.Group> 
  </Row>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
   );
}
}
export default ClientForm;