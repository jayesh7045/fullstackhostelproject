import React from 'react'
import "./Navbar.css"
import { NavLink, Link } from 'react-router-dom'
// import UserLoginForm from "./UserLoginForm"
function Navbar() {
  return (
    <div>
      <div className='firsthalf'>
        <NavLink to={'/'}><h3>Home</h3></NavLink>
        <NavLink to={'/about'}><h3>About</h3></NavLink>
        <h3>Contact Us</h3>
      </div>
      
    </div>
  )
}

export default Navbar
