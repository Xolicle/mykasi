import React from "react";
import { Form, Button } from "react-bootstrap";
import "./ComponentStyles/hero.css";

export default function Hero() {
  return (
    <div className="searchTab">
      <div className="form">
        <Form className="mb-3">
          <Form.Control
            className="form-control"
            type="search"
            placeholder="Search your municipality"
            aria-label="Search"
          />
        </Form>
      </div>
      <div className="formButton">
        <Button variant="primary" type="submit" className="px-4">
          Search
        </Button>
      </div>
    </div>
  );
}
