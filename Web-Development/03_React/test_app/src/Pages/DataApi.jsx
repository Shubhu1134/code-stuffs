import React from "react";
import { useState } from "react";

const [inputValue, setInputValue] = useState("");

handleInput(() => {
  setInputValue(inputValue);
  console.log();
});

function DataApi() {
  return (
    <div>
      <label>new button</label>
      <input type="text" onChange={handleInput}>
        {" "}
      </input>
      {inputValue}
    </div>
  );
}

export default DataApi;
