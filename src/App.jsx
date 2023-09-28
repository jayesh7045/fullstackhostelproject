import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Routes, Route } from "react-router-dom";
import UserRegistration from './Components/UserRegistration';
import UserLoginForm from './Components/UserLoginForm';
import HostelPage from './Components/HostelPage';
import ProNavbar from './Components/ProNavbar';
import HostelMainPage from './Components/HostelMainPage';
import Navbar from './Parts/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/userregistration' element={<UserRegistration></UserRegistration>}></Route>
        <Route path='/login' element={<UserLoginForm></UserLoginForm>}></Route>
        <Route path='/hostelmainpage' element={<HostelMainPage></HostelMainPage>}></Route>
      </Routes> */}
      {/* <ProNavbar></ProNavbar> */}
      {/* <button className='btn btn-primary'>Bootstrap button</button> */}
      <Navbar></Navbar>
    </div>
  );
}

export default App;
