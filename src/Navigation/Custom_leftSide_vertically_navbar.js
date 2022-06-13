import React, { useState } from "react";
// import "./Navigation.css";
import "../Questions/Questions_List.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
export default function Custom_leftSide_vertically_navbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        id="leftt"
        expanded={expanded}
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse className="fl" id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-end margin-left">
            <Nav.Link onClick={() => setExpanded(false)} as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/about"
              className="change-color"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={NavLink}
              to="/careers"
            >
              Career
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
              to="/book"
            >
              Books
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
