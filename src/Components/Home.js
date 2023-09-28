import React from 'react'
import Navbar from './Navbar'
import img from "./cartoon - Copy.jpeg"
import "./Home.css"
import { NavLink } from 'react-router-dom'
function Home() {
  return (

    <div>
     <Navbar></Navbar>
     <div className='middlecontent'>
        <div className='text'>
          <h1>WELCOME TO <span className='pccoer'>PCCOER</span></h1>
          <h1>HOSTEL MITRA</h1>
          <button className='btn1'><h1>Admin</h1></button>
          <NavLink to={'/userregistration'}><button className='btn2'><h1>User</h1></button></NavLink>
        </div>
        <div className='image'>
          <img src={img} alt="" />
        </div>
     </div>
    </div>
  )
}

export default Home
