import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <div>
        <div>
    <Navbar collapseOnSelect expand="lg" className="gate" bg="" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LEADWORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Vision</Nav.Link>
            <Nav.Link href="#pricing">Mission</Nav.Link>
            <NavDropdown title="Activities" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Exclusive Session</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Young Lead Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">LPC Conference</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <button>Become a leader</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </div>
  )
}
