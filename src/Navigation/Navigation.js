import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import Custom_leftSide_vertically_navbar from "./Custom_leftSide_vertically_navbar.js";
// eslint-disable-next-line
import { GoogleLogin, GoogleLogout } from "react-google-login";

//https://stackoverflow.com/questions/40491483/hide-collapse-navbar-after-link-click-react-redux-react-bootstrap

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="size">
        <Custom_leftSide_vertically_navbar />
        <Navbar
          collapseOnSelect
          expand="lg"
          // bg="dark"
          id="bg"
          expanded={expanded}
        >
          <Navbar.Brand onClick={() => setExpanded(false)} as={NavLink} to="/">
            Logo
          </Navbar.Brand>
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
              <Nav.Link onClick={() => setExpanded(false)}>
                <GoogleLogin
                  clientId="362106271336-lvllg1b0gt944t15dkdlkrs165s387v9.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="login"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </button>
                  )}
                  buttonText="Login"
                  isSignedIn={true}
                  cookiePolicy={"single_host_origin"}
                  onSuccess={(response) => {
                    setIsLoggedIn(() => {
                      return { isLoggedIn: true };
                    });
                  }}
                  onFailure={(response) => {
                    setIsLoggedIn(() => {
                      return { isLoggedIn: false };
                    });
                  }}
                />
              </Nav.Link>
              {/* <GoogleLogout
                clientId="362106271336-lvllg1b0gt944t15dkdlkrs165s387v9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={(response) => {
                  setIsLoggedIn(() => {
                    return { isLoggedIn: false };
                  });
                }}
              ></GoogleLogout> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Navigation;
