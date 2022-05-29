import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

//https://stackoverflow.com/questions/40491483/hide-collapse-navbar-after-link-click-react-redux-react-bootstrap

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
        className="background COLOR"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand onClick={() => setExpanded(false)} as={NavLink} to="/">
            Computing
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link onClick={() => setExpanded(false)} as={NavLink} to="/">
                Home
              </Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/question"
              >
                Questions
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                as={NavLink}
                to="/login"
              >
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
