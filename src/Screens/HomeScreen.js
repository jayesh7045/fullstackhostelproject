import React, { useEffect } from "react";
import axios from "axios";
import {useState} from 'react'
import Room from "../Parts/Room";
import Contact from "../Parts/Contact";
import Details from "../Parts/Details";
import Filters from "../Parts/Filters";
import "./HomeScreen.css"
function HomeScreen() {

  const [rooms, setrooms] = useState([]);
  const [errors, seterrors] = useState(true);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/rooms/getallrooms");
        const data = response.data;
        console.log(data);
        setloading(false);
        setrooms(data);
        seterrors(false);
      } catch (error) {
        seterrors(true);
        console.log(error);
        setloading(false);
      }
    };
    fetchData(); 
  }, []);
  return (
    <div className="cool">
      <Filters className='fil'> </Filters>
      <div className="row justify-content-center mt-5">
      {loading ? (<h1>Loading....</h1>) : errors ? (<h1>Errors</h1>) : rooms.map(room=>{
        return <div className="col-md-9">
          <Room props={room}></Room>
        </div>
      })}
      </div>
    </div>
  );
}

export default HomeScreen;



