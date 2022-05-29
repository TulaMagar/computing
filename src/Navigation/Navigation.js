import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

//https://stackoverflow.com/questions/40491483/hide-collapse-navbar-after-link-click-react-redux-react-bootstrap

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="size">
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="lg"
          variant="dark"
          className="bg"
          expanded={expanded}
        >
          <Navbar.Brand
            className="margin-left"
            onClick={() => setExpanded(false)}
            as={NavLink}
            to="/"
          >
            Computing
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse className="fl" id="responsive-navbar-nav">
            <Nav className="me-auto justify-content-end margin-left">
              {/* <Nav.Link onClick={() => setExpanded(false)} as={NavLink} to="/">
              Home
            </Nav.Link> */}
            </Nav>
            <Nav className="margin-right">
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
                to="/login"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Navigation;
