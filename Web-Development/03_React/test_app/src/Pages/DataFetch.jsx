import { useState } from "react";
import axios from "axios";

const DataFetch = () => {
  const [username, setUsername] = useState(""); // Stores the username input
  const [userData, setUserData] = useState(null); // Stores API response
  const [error, setError] = useState(null); // Stores error message

  const fetchUserData = async () => {
    setError(null); // Clear previous errors
    setUserData(null); // Clear previous data
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data); // Store user data
    } catch (err) {
      setError("User not found! Please try again."); // Handle errors
    }
  };

  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h2>GitHub User Finder</h2>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={fetchUserData} style={{ padding: "10px" }}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            display: "inline-block",
          }}
        >
          <img src={userData.avatar_url} />
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Repositories: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default DataFetch;
