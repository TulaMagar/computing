import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation () {
  const navStyle ={
    color : 'white'
  };

  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
        <Container >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/Questions">Questions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
