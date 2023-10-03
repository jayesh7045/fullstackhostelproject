import React from 'react';
import './App.css';
import Navbar from './Parts/Navbar.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; // Import BrowserRouter and Switch from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/home' element={<HomeScreen/>} />
        </Routes>
    </div>
  );
}

export default App;
