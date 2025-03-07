import React, { useState } from "react";
import "./trial.css";
import { Col, Container, Row } from "react-bootstrap";
import colors from "./color.jsx";

const Trial = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [message, setMessage] = useState("");
  const [col1, setCol1] = useState();
  const [col2, setCol2] = useState();
  
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    const newNum1 = randomNumberInRange(1, 10);
    const newNum2 = randomNumberInRange(1, 10);

    setCol1(colors[newNum1]);
    setCol2(colors[newNum2]);

    setNum1(newNum1);
    setNum2(newNum2);
    setMessage(newNum1 === newNum2 ? "You Win!" : "You Lose!");
    // const newColors = num1 === num2 ? ['#ffcc00', '#ffcc00'] : ['#ff0000', '#0000ff'];
  };



  return (
    <>
      <div className="flex flex-col items-center gap-4 p-6">
        <div className="p-4 bg-gray-300 rounded-md">{message}</div>
        <div className="flex flex-row gap-52">
          <div
            className="bg-gray-300 p-2 rounded-md w-32 text-center"
            style={{ backgroundColor: `${col1}` }}
          >
            Number 1: {num1}
          </div>
          <div
            className="bg-gray-300 p-2 rounded-md w-32 text-center"
            style={{ backgroundColor: `${col2}` }}
          >
            Number 2: {num2}
          </div>
        </div>
        <button className="bg-blue-600 p-1 px-2" onClick={handleClick}>
          Press Here
        </button>
        {colors[0]}
      </div>
    </>
  );
};

export default Trial;
