import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd
} from "react-icons/si";
import { FaJira } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiAdobeillustrator />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
  <SiAdobexd />
</Col>
    </Row>
  );
}

export default Toolstack;
