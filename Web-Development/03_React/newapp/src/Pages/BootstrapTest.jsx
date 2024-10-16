import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Pages.css";

const BootstrapTest = () => {
  return (
    <>
      <div className="heading-01">
        <h1>Basic Grid Layout</h1>
      </div>
      <Container>
        <Row>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
        </Row>
        <Row>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
        </Row>
        <Row>
          <Col xs={4} className="my-col">
            shubh1
          </Col>
          <Col className="my-col">shubh1</Col>
        </Row>
        <Row>
          <Col className="my-col">shubh1</Col>
          <Col className="my-col">shubh1</Col>
        </Row>
        <Row>
          <Col className="my-col">shubh1</Col>
        </Row>
      </Container>
    </>
  );
};

export default BootstrapTest;
