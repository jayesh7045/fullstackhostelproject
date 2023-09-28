import React from "react";
import "./UserRegi.css";
import {useForm} from "react-hook-form";
import Navbar from "./Navbar";
 import { NavLink } from "react-router-dom";
function UserRegistration() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
    <div className="main">
      <div className="register">
        <h2>Students Registration </h2>
        <form id="register" method="post">
          <label htmlFor="">Username</label>
          <br />
          <input type="text" id="username" name="username" placeholder="Enter the Username here" />
          <br />
          <label htmlFor="">First Name : </label>
          <br />
          <input type="text" name="fname" id="name" placeholder="Enter your name here" />
          <br />
          <label htmlFor="">Last Name : </label>
          <br />
          <input type="text" name="lname" id="name" placeholder="Enter Your last name here"/>
          <br />
          <label htmlFor="">Your Age : </label>
          <br />
          <input type="number" name="age" id="name" placeholder="How old are you"/>
          <br />
          <label htmlFor="" id="name" placeholder="Enter the valid Email id">Email</label>
          <br />
          <input type="email" name="email" id="email" placeholder="Enter Your Email Here" />
          <br />
          <div className="gender">
          <label htmlFor="">Gender : </label>
          <br />
          &nbsp;&nbsp;&nbsp;
          <input type="radio" name="gender" id="male"/>
          <span id="male"> Male </span>
          <input id="female" name="gender" type="radio"></input>
          <span id="female" >Female</span>
          <br />
          </div>
          <label htmlFor="New Password">Create a New Password</label>
          <br />
          <input type="password" name="password" id="password" placeholder="Create a new Password"/>
          <br />
          <br />
          <hr />
          <br />
          <NavLink to={'/login'}><input type="submit" value="submit" name="submit" id="submit"/></NavLink>
          <br />
        </form>
        <div className="loginpan">
        <div>Login if Already Registered - </div> <NavLink to={'/login'}><h4 className="login">Login</h4></NavLink> 
        </div>
      </div>
    </div>
    </div>
  );
}
export default UserRegistration;
