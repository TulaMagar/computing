import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom';
import {refresh} from 'react-router';

//https://react-bootstrap.github.io/components/navbar/ 
// Fix nav bar this link
function Navigation () {

  // onUpdate={window.scrollTo(0,0)}
  const sampleLocation = useLocation();
  const componentDidMount = () => {
    // window.location.reload();
    window.scrollTo(0,0);
  }
  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand='sm' variant='dark' className='background color '>
        <Container >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='mobile-nav' id='responsive-navbar-nav'>
          <Nav className='me-auto'>
              <Nav.Link as={NavLink} to="/" onClick={() => componentDidMount()}>Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/about" onClick={() => componentDidMount()}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/shop" onClick={() => componentDidMount()}>Questions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

 
}

export default Navigation;
