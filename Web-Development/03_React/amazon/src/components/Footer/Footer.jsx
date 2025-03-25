import React from 'react'
import {  Container, Row , Col} from 'react-bootstrap'

import './footer.css'

function Footer() {
  return (
    <>
   <footer className="bg-black text-white">
      <Container className="p-4">
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: 555-1234</p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
          </Col>
        </Row>
        <Row>
    
        </Row>
      </Container>
    </footer>
    
    </>
  )
}

export default Footer;
