import React from 'react'
import Navbar from '../Parts/Navbar'
import { useState } from 'react'
import "./R.css"
import axios from 'axios'
function R() {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirm_password, setconfirm_password] = useState("");
    


    const registerit=()=>{
        if(confirm_password === password)
        {
            const user = {
                username, 
                email, 
                password, 
                confirm_password
            }
        }
        else
        {
            alert("The passwords are not matching")
        }
    }

  return (
    <div>
    <Navbar className="nav"></Navbar>
    <div className="container">
        <h2>Registration</h2>
            <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={(e)=>setusername(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label for="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" value={confirm_password} onChange={(e)=>setconfirm_password(e.target.value)} required/>
            </div>
            <div className="form-group">
                <button className='rbtn' onClick={()=>registerit()}>Register</button>
            </div>
            <h1>{username}</h1>
    </div>
    </div>
  )
}

export default R
