import React from "react";
import { ListGroup } from "react-bootstrap";


class PolicyForm extends React.Component {
  render() {
    return (
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          style={{
            opacity: "0.5",
            background: "rgba (86, 185, 100, 0.20)",
            fontWeight: "bold",
            color: "black",
            border:'0px',
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
              CANCELLATIONS & RESCHEDULING
            </div>
            <p
              className="subtext"
              style={{
                display: "flex",
                // color: " rgb(190, 98, 144)",
                color: "hotpink",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '24px',
              }}
            >
            Salon Xperience kindly ask that you proved at least 24 hours notice of cancellation or reschedule request. For special event we request a 48 hour cancellation notice. If the aforementioned is not adhered to, than a cancellation fee will apply.
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          style={{
            opacity: "0.5",
            background: "rgba (76, 175,80,0.50)",
            fontWeight: "bold",
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
              PRICING
            </div>
            <p
              className="subtext"
              style={{
                display: "flex",
                color: " hotpink",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '24px',
              }}
            >
              Salon Xperience pricing is subject to the length and texture of the client. The aforemention will determine the length of your appointment.
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          style={{
            opacity: "0.5",
            background: "rgba (76, 175,80,0.50)",
            fontWeight: "bold",
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
              APPOINTMENT & RESERVATION
            </div>
            <p
              className="subtext"
              style={{
                display: "flex",
                color: " hotpink",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '24px',
              }}
            >
              Visitor that are new to the pampering experience that salon
              Xperience provides must reserve their appointment with a credit
              card. All Major Credit Cards are accepted. Stylist may recieve gratitude directly via check or Cash.
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          style={{
            opacity: "0.5",
            background: "rgba (76, 175,80,0.50)",
            fontWeight: "bold",
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
              HEALTH & SAFETY
            </div>
            <p
              className="subtext"
              style={{
                display: "flex",
                color: " hotpink",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '24px',
              }}
            >
             Salon Xperience consider our stylist and client to be family.  We require that mask our worn on the premises at all time to keep our staff and clients safe. We adhere to all guidelines set forth by the CDC. You may review the cdc guidelines below.
            </p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}
export default PolicyForm;
