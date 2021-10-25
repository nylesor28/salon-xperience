import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./../../assets/logo/sx1.png";
// import { Navbar } from "react-bootstrap";


function Footer() {
  return (
    <footer className="mt-5">
      <Container className="p=0" fluid={true}>
        <Row className="border-top justify-content-betweenp-3">
          <Col className="p-15" md={2} sm={12}>     
          <img
                src={logo}
                width="200"
                height="200"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Col>
           <Col className="p-15" md={2} sm={12}>  
               <ul>
              <li className="list-unstyled">
                <p>1623 ABC DRIVE BLOOMFIELD, CONNECTICUT 06002 </p>
              </li>
              <li className="list-unstyled">
              <p>Phone: 860-123-4567</p>
              </li>
            </ul>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={4}>
          <h5 className="title">Hours of Operation</h5>
            <ul>
              <li className="list-unstyled">
                <p>Tuesday: 8am to 8pm</p>
              </li>
              <li className="list-unstyled">
                <p>Wednesday: 8am to 8pm</p>
              </li>
              <li className="list-unstyled">
              <p>Thursday: 8am to 8pm</p>
              </li>
              <li className="list-unstyled">
              <p>Friday: 8am to 8pm</p>
              </li>
              <li className="list-unstyled">
              <p>Monday & Sunday: Closed</p>
              </li>
            </ul>
            </Col>
            <Col className="p-0" md={4} sm={12}>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">COVID-19 GUIDLINES</a>
              </li>
              <li className="list-unstyled">
                <p>❤️ Developed by Roz Akeem and Patrena &copy; 2021 R.A.P, LLC.</p>
              </li>
            </ul>
          </Col> 
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;