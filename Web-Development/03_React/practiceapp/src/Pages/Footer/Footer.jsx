import React from 'react'
import './footer.css'
import { Container, Row , Col } from 'react-bootstrap'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTumblerCircular } from "react-icons/ti";


function Footer() {
  return (
    <div>
        <Container  fluid className="footer">
            <div>
                <Row>
                    <Col> <h3>Sample Website</h3>
                    This is a sample line. This is a sample line. This is a sample line. This is a sample line. This is a sample line. This is a sample line. This is a sample line. This is a sample line. This is a sample line. 

                    </Col>
                    <Col> <h3>About Sample websit</h3> 
                    <Row> Home</Row>
                    <Row> About</Row>
                    <Row> Services</Row>
                    <Row> FAQs</Row>
                    </Col>
                    <Col> <h3>Customer service </h3>
                    <Row>+12013514000, +12086964143</Row>
                    <Row>dewobe9340@samplewebsite.com</Row>
                    <Row>help@samplewebsite.com</Row>
                    </Col>
                    <Col><h3>Social Media
                   <Row>
                    <Col>
                    <SlSocialInstagram />
                    <TiSocialTumblerCircular />
                    <TiSocialTumblerCircular />
                    </Col>
                   </Row>
                    
                   
                    </h3>
                    </Col>
                </Row>
            </div>
        </Container>
      
    </div>
  )
}
export default Footer;
