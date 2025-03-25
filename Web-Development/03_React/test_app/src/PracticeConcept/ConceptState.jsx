import React from "react";
import "./ConceptInput.jsx";
import { useState } from "react";

function ConceptState() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };
  return (
    <div className="main">
      hello rahul your age is : {age}
      <button className="btn" onClick={increaseAge}>
        Increse the value by 1
      </button>
    </div>
  );
}

export default ConceptState;
