import React from 'react'

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function navbar() {
  return (
    <div>
              <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">SAMPLE WEBSITE </Nav.Link>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">CONTECT</Nav.Link>
            <Nav.Link href="#home">SERVICES </Nav.Link>
            <Nav.Link href="#features">FEATURES</Nav.Link>
            <Nav.Link href="#pricing">FAQ's</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#features">SignUp</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>

      
    </div>
  )
}

export default navbar;
