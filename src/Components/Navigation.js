import React from "react";
import "./ComponentStyles/navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <div className="mb-5">
      <Navbar expand="lg">
        <Container className="nav">
          <Navbar.Brand href="#" className="mx-5">
            MuniConnect
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navCollapse">
            <Nav className="navItem">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#water-sanitation">Water & Sanitation</Nav.Link>
              <Nav.Link href="#environmental-alerts">
                Environmental Alerts
              </Nav.Link>
              <Nav.Link href="#health-services">Health Services</Nav.Link>
            </Nav>
            <img src="" alt="user profile" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
