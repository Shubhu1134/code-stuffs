import React from "react";
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Navbar() {
    return (
     <>
     <div className="navbar">
   <ul>
    <li> <a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Help</a></li>
   </ul>
   </div>
     </>
    )
  }
  
  export default Navbar ;