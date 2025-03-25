import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./landing.css";

function CarouselComponent() {
  return (
    // <Container style={{ height: "100vh" }}>
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/800x400/?product1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/800x400/?product2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Product 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/800x400/?product3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Product 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </Container>
  );
}

export default CarouselComponent;
