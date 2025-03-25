import React from "react";
import { useState } from "react";

function ConceptInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div>hey</div>
      <div>
        <label></label>
        <input type="password" onChange={handleInputChange} />
        <div> your value what you are goin to type in : {inputValue}</div>
      </div>
    </>
  );
}

export default ConceptInput;
