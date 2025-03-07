import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="banner-div">
        REFER YOUR FRIEND FOR 750 CREDITS KNOW MORE
      </div>
      <Header />
      <Container className="custom-con">
        <Row className="cool-div">
          <Col className="head-col">
            <div className="head-info">
              <div className="head-txt">This is a Heading</div>
              <div className="head-sub-txt">
                This is a sample tagline. And this is another line
              </div>
            </div>
            <button className="my-btn">Book Now</button>
          </Col>
          <Col className="head-img">
            <img
              src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=sph"
              className="img-head"
              height={300}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
