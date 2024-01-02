
import "./jtemp.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.js";
import { useLocation } from "react-router-dom";

function FrontPage() {
  const location = useLocation();
  const welcomeMessage = location?.state?.username
    ? `Hello ${location.state.username} and Welcome to Campus Quarters`
    : " User Please Login";
  return (
    <div className="maindiv">
      <Navbar message = {welcomeMessage}></Navbar>
      
      <div className="contentbelownav">
        
      <div className="welcomem">
       
      </div>
      
      <div className="backimg">
        <div className="outer">
        <div className="h-text">
          <h1>
            <h1 className="welcome">
              WELCOME TO <span className="cmp">CAMPUSQUARTERS</span>
            </h1>
          </h1>
          <p className="explore">
            <b>EXPLORE, DREAM, AND ACHIEVE</b>
          </p>
          <NavLink to="./detail">
            <button type="button" class="btn btn-success">
              <div className="explorem">Explore</div>
            </button>
          </NavLink>
        </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default FrontPage;
