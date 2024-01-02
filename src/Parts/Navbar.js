import React from "react";
import img1 from "./hbavk.png";
import "./FrontPage.css";
import img3 from "./smallhouse.jpg";
import { NavLink } from "react-router-dom";
function Navbar({message}) {
  console.log(message)
  return (
    
    <div>
      <div className="nav">
        <div className="address">
          <span className="addcontent">
            {`Pimpri Chinchwad College of Engineering and Research Pune`}
            
          </span>
        </div>
        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-google"></i>
          <i className="fa fa-twitter"></i>
          <NavLink to={"/register"}><a>Signup</a></NavLink>
           <NavLink to={"/loginComponent"}><a>Login</a></NavLink>
        </div>
      </div>

      <div className="nav2">
        <div className="heading">
          <div className="img3">
            <img src={img3} className="img3" alt="" />
          </div>
          <div className="logo">
            Campus <span className="logo2">Quaters</span>
            <div>
              <div className="mmenu">
              {message ? (
                <div>{message}!</div>
                ) : (
                <p></p>
                )}  
              </div> 
            </div>
          </div>
        </div>
        <div className="menu">
          <NavLink to={"/"}><a>Home</a></NavLink>
          <NavLink to={"/contact"}><a>Contact Us</a></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
