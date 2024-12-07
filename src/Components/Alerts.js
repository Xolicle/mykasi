import React from "react";
import { Row, Col } from "react-bootstrap";
import "./ComponentStyles/alerts.css";

export default function Alerts() {
  return (
    <div>
      <Row>
        <Col>
          <div>Weather Alerts</div>
        </Col>
        <Col>
          <div>Air Quality</div>
        </Col>
        <Col>
          <div>Environmental Arlets</div>
        </Col>
      </Row>
    </div>
  );
}
