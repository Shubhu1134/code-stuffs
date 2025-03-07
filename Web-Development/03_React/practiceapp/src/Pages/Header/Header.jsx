import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LuPackagePlus } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { GrVmMaintenance } from "react-icons/gr";
import { FaPaintRoller } from "react-icons/fa6";



function Header() {
  return (
    <>
      <Container className="navbar">

        <Row>
          <Col>
            <h1>This is a Heading Text</h1>
            <h2>This is a sample tagline. And this again another line.</h2>

            <Row>
            
            <div className="">
             
               <button className="bottom-button">Click Me</button>
             </div>
            </Row>
          </Col>
          <Col className="image1">
            <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=sph" />
          </Col>
        </Row>
      </Container>
      <Container  >
      <div>
        <Row>
          <Col className="Package">
          <h3>Package</h3>
          <LuPackagePlus className="icon"/>

          </Col>
          <Col className="Package">
          <h3>Servicing</h3>
          <GrServices className="icon" />
          </Col>
          <Col className="Package">
          <h3>Maintainence </h3>
          <GrVmMaintenance className="icon" />
          </Col>
          <Col className="Package">
          <h3>Deleting/Painting</h3>
          <FaPaintRoller  className="icon" />
          </Col>
        </Row>
      </div>
      </Container>
      <Row>
      <div className="line"> 
        <h2>
          Why Choose Us
        </h2>
      </div>
      </Row>

    </>
  );
}

export default Header;
