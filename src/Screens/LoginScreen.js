import React, { useState } from "react";
import Navbar from "../Parts/Navbar";
import "./R.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function LoginScreen() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  async function Login(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    try {
      const result = await axios.post("/api/Users/login", user);

      // Assuming the server responds with a successful login status
      if (result.status === 200) {
        navigate('/',{ state: { username } }); // Redirect to the home page
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar className="nav" />

      <div className="container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="rbtn" onClick={(e) => Login(e)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
