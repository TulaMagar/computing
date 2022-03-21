import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//https://react-bootstrap.github.io/components/navbar/ 
// Fix nav bar this link
function Navigation () {
  // const navStyle ={
  //   color : 'white'
  //   text-decoration: 
  // };
  return (
    <>
      {/* <Navbar collapseOnSelect sticky='top' expand='sm' variant='dark' className='background color'>
        <Container >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href="/computing">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/shop">Questions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <nav>
        <Link style={navStyle} to="/">
          <h3> Home </h3>
        </Link>
        
        <ul className='nav-links'>
          <Link style={navStyle} to="/about">
            <li> About </li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li> Shop </li>
          </Link>
        </ul>
    </nav> */}


      <Navbar collapseOnSelect sticky='top' expand='sm' variant='dark' className='background color '>
        <Container >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='mobile-nav' id='responsive-navbar-nav'>
            <Nav className='me-auto'>
                <Link className='nav-list' to="/" onClick={() => window.location.reload()} >Home</Link>
            </Nav>
            <Nav>
                <Link className='nav-list'  to="/about" onClick={this.forceUpdate} > About </Link>
                <Link className='nav-list'  to="/shop" onClick={this.forceUpdate} >Questions</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

 
}

export default Navigation;
