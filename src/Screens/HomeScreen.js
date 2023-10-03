import React, { useEffect } from "react";
import axios from "axios";
import {useState} from 'react'
import Room from "../Parts/Room";
function HomeScreen() {

  const [rooms, setrooms] = useState([]);
  const [errors, seterrors] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/rooms/getallrooms");
        const data = response.data;
        console.log(data);
        setloading(false);
        setrooms(data);
      } catch (error) {
        seterrors(true);
        console.log(error);
        setloading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      <div className="row">
      {loading ? (<h1>Loading....</h1>) : errors ? (<h1>Errors</h1>) : rooms.map(room=>{
        return <div className="col-md-4"><Room props={room}></Room></div>
      })}
      <h1>Home Screen {rooms.length} rooms</h1>
      </div>
    </div>
  );
}

export default HomeScreen;
