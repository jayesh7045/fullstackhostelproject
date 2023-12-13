import React from 'react';
import './App.css';
import Navbar from './Parts/Navbar.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import HomeScreen from './Screens/HomeScreen';
import Details from './Parts/Details';
import R from "./Screens/R"
import L from './Screens/L';
import Contact from './Parts/Contact';
import FrontPage from './Parts/FrontPage';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<FrontPage></FrontPage>}></Route>
          <Route path='/detail' element={<HomeScreen/>} />
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/detail/:roomid' element={<Details ></Details>}></Route>
          <Route path='/register' element={<R></R>}></Route>
          <Route path='/login' element={<L></L>}></Route>
        </Routes>
    </div>
  );
}

export default App;
