import React from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//https://react-bootstrap.github.io/components/navbar/
// Fix nav bar this link
function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="sm"
        variant="dark"
        className="background color "
      >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="mobile-nav" id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/careers">
                Careers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/question">
                Questions
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
