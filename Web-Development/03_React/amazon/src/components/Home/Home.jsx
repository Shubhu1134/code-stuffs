import React from 'react'
import './home.css'
import {  Container, Row ,Col} from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CarouselComponent from '../landing/landing'




function Home() {
  return (
   <>
       <Navbar />
       <CarouselComponent />
    <Footer/>
 
 
   </>
  )
}

export default Home;
