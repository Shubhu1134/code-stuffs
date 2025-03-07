import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./random.css";
import colors from "../Trial/color";

 function Random() {
  const [num1 , setNum1] = useState(0); 
  const [num2 , setNum2] = useState(0);
  const [col1 , setCol1] = useState(0);
  const [col2 , setCol2] = useState (0);
  const [Message , setMessage] = useState("");

 //  const [hiddenDiv, setHiddenDiv] = useState(true); 
  //  let x = Math.floor((Math.random() * 100) + 1);
 


 const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

  const handleClick = () => {

    const newNum1 = randomNumberInRange(1, 10);
    const newNum2 = randomNumberInRange(1, 10);



    setCol1(colors[newNum1]);
    setCol2(colors[newNum2]);

    setNum1(newNum1);
    setNum2(newNum2);
    setMessage(newNum1 === newNum2 ? "You Win!" : "You Lose!");

  }

 return (
<>
  <div className="container-flex">
     <div className="box">
      <h3>{Message}</h3>
     </div>

    <div>
       <Row>
         <Col className="box1"> 
         number1 :{num1}
         
         </Col>
         <Col className="box2">
         
         number2 : {num2}
         </Col>
       </Row>
 
     </div>

     <div className="button">
        <button onClick={''}></button>
     </div>


</div>


</>
    
  );
}
export default Random;




 



