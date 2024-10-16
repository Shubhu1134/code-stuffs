import React from "react";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">Shubham</div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Sahil/Product</a>
            </li>
            <li>
              <a href="#">Rahul/Explore</a>
            </li>
            <a href="#"> Help</a>
            <li />
            <li>
              <a href="#">Teams & Companies</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="actions">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </div>

      <div className="hero">
        <div className="content">
          <h1>This is my First Content</h1>
          <p>
            Zapier empowers you to automate your work across 5,000+ apps—so you
            can move forward, faster.
          </p>
          <button className="get-started">Get started free</button>
        </div>
        <div className="image">
          <img src="https://example.com/your-image.jpg" alt="Hero Image" />
          <div className="steps">
            <div className="step">
              <img src="https://example.com/facebook-icon.svg" alt="Facebook" />
              <p>When I get a new lead</p>
            </div>
            <div className="step">
              <img src="https://example.com/slack-icon.svg" alt="Slack" />
              <p>Let my team know about it</p>
            </div>
            <div className="step">
              <img
                src="https://example.com/salesforce-icon.svg"
                alt="Salesforce"
              />
              <p>Create a new deal in my CRM</p>
            </div>
            <div className="step">
              <p>2,546 leads automated monthly</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>Yongjoon Kim, Design Systems Manager at Cottage</p>
      </footer>
    </div>
  );
}
export default App;
