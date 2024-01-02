import React from "react";
import Navbar from "../Parts/Navbar";
import { useState } from "react";
// import "./R.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function R() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  async function register(){
    if(password == confirm_password)
    {
     
      const user = {
        username, email, password, confirm_password
      }
      try{
        const result = await axios.post("/api/Users/register", user).data
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      alert("The passwords do not match")
    }
  }
  return (
    <div>
      <Navbar className="nav"></Navbar>
  
      <div className="container">
        <h2>Registration</h2>
        <form >
          <div className="form-group">
            <label for="username">Username: </label>
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
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="confirm_password">Confirm Password:</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirm_password}
              onChange={(e) => setconfirm_password(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={()=>register()} className="rbtn">Submit</button>
        </form>
        <h1>{username}</h1>
      </div>
    </div>
  );
}

export default R;
