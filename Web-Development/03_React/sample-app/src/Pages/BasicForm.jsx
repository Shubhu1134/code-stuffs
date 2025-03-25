import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";
import "./basicForm.css";

function BasicForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div>
        <div className="wrapper">
          <h1>Basic React Form</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default BasicForm;
