import React from "react";
import "./home.css";
import Header from "../../Pages/Header/Header";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
// import Footer from "../../Pages/Footer/Footer";
// import Bottom from "../../Pages/Bottom/Bottom";
// import { useState} from "react";




function Home() {
  return (
    <>
      <div className="Header">REFER YOUR FRIEND FOR 750 CREDITS KNOW MORE</div>
      <Navbar bg="Light" data-bs-theme="light">
        <Container fluid className="banner">
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
      </Navbar>
      <Navbar />
      <Header />

       
        {/* <Bottom/> 
        <Footer /> */}
    </>
  );
}

export default Home;
