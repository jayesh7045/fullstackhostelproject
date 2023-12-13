import React from "react";
import img1 from "./hbavk.png";
import "./FrontPage.css";
import img3 from "./smallhouse.jpg";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.js";
function FrontPage() {
  return (
    
    <div className="maindiv">
      <Navbar></Navbar>
      <div className="backimg">
        <img src={img1} className="img1" alt="" />
        <div className="h-text">
          <h1>
            <h1 className="welcome" >WELCOME TO <span className="cmp">CAMPUSQUARTERS</span></h1>
          </h1>
          <p className="explore"><b>EXPLORE, DREAM, AND ACHIEVE</b></p>
          <NavLink to="./detail"><button>Explore</button></NavLink>
          {/* <button><b>Learn more</b></button> */}
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
