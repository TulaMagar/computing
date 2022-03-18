import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation () {
  const navStyle ={
    color : 'white'
  };

  // return (
  //   <nav>
  //       <Link style={navStyle} to="/">
  //         <h3> Home </h3>
  //       </Link>
        
  //       <ul className='nav-links'>
  //         <Link style={navStyle} to="/about">
  //           <li> About </li>
  //         </Link>
  //         <Link style={navStyle} to="/shop">
  //           <li> Shop </li>
  //         </Link>
  //       </ul>
  //   </nav>
  // );

  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand='sm' variant='dark' className='background color'>
        <Container >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/shop">Questions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

 
}

export default Navigation;
