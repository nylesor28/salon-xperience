import react from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



export default function HairTypesCard({hairtypescard}) {
      return (
<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={hairtypescard.image} rounded />
    </Col>
    </Row>
    {/* <Row>
    <Col xs={6} md={4}>
      <Image src={hairtypescard.image} roundedCircle />
    </Col>
    </Row>
    <Row>
    <Col xs={6} md={4}>
      <Image src={hairtypescard.image} rounded />
      </Col>
  </Row> */}
</Container>
      );
    }

// export default HairTypesCard;