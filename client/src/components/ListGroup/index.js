import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ListGroup } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Badge from "react-bootstrap/Badge";

class HomeForm extends React.Component {
  render() {
    return (
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          style={{
            opacity: "0.5",
            background: "rgba (86, 185, 100, 0.20)",
            fontweight: "bold",
            color: "black",
            border:'0px',
            // borderBottom: 'solid black',
          }}
        >
          <div className="ms-2 me-auto">
            <div
              className="fw-bold"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '36px',
              }}
            >
              Mission
            </div>
            <p
              className="subtext"
              style={{
                display: "flex",
                color: " rgb(190, 98, 144)",
                fontweight: "bold",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '24px',
              }}
            >
              We celebrate women and men in their real, most raw, authentic
              brilliance, who believe in themselves and are ready to step into
              the look they love. We employ hair products with some of the most
              natural and rich ingredients because we believe you should never
              expect less.
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          style={{
            opacity: "0.5",
            background: "rgba (76, 175,80,0.50)",
            fontweight: "bold",
            color: "black",
            border:'0px',
            // borderBottom: 'solid black',
          }}
        >
          <div className="ms-2 me-auto">
            <div
              className="fw-bold"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '36px',
              }}
            >
              TRADITION OF INVESTING IN OUR FUTURE
            </div>
            <p
              className="subtext"
              style={{
                display: "flex",
                color: " rgb(190, 98, 144)",
                fontweight: "bold",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '24px',
              }}
            >
              Salon Xperience has a tradition of investing in our stylist. Our
              stylist are continuously attending seminars in New York, Los
              Angelas, and Paris to enhance their knowledge of new techniques
              and styles. We are committed to training developing stylist in our
              community. We recent graduate and well as experience staff from
              the best institutions in our community, country, and beyond. New
              Stylist are mentored by our talented staff.
            </p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}
export default HomeForm;
