import React from 'react';
import Contact from './Parts/Contact';
import './App.css';
import Navbar from './Parts/Navbar.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; // Import BrowserRouter and Switch from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import Details from './Parts/Details';
import MyStart from './Parts/MyStart';
// import Homenew from './Parts/Homenew';
// import MyHome from './Parts/MyHome';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
        <Routes>
          <Route path='/' element={<MyStart></MyStart>}></Route>
          <Route path='/detail' element={<HomeScreen/>} />
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/detail/:roomid' element={<Details ></Details>}></Route>
        </Routes>
    </div>
  );
}

export default App;
