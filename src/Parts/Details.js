import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Details.css";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "./Navbar"
import App from "../App";
function Details() {

  const { roomid } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);
  const [wifi, setwifi] = useState(false);
  console.log("Hello")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/rooms/getallrooms?roomid=${roomid}`);
        setLoading(false);
        if (Array.isArray(response.data) && response.data.length > 0) {
          
          const matchingRoom = response.data.find((room) => room._id === roomid);
          const wifiRooms = response.data.find((room)=>room.wifi_availability === "yes")
          const Rentrooms = response.data.find((room)=>(Number.parseInt(room.rentPay) < 1000))
          console.log(wifiRooms)
          if (matchingRoom) {
            setRoom(matchingRoom);
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    fetchData(); 
  }, [roomid]);
  var name = "jayesh";
  return (
    <div>
      <Navbar></Navbar>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : room ? (
        <div>
          <div className="row">
            <div className="packer">
              <div className="centerimage">
                <img src={room.images_urls[0]} className="bigimage" alt="" />
              </div>
              <div className="datais">
                <h1>{room.hostel_name}</h1>
                <p>
                  <b>Maxcount</b> :- {room.no_of_person}
                </p>
                <p>
                  <b>Address</b> :- {room.address}
                </p>
                <p>
                  <b>Rentpay</b> :- {room.rent}
                </p>
                <p>
                  <b>Wifi</b>:- {room.wifi_availability}
                </p>
                <p>
                  <b>Washing Machine</b>:- {room. washing_machine_availability}
                </p>
                <p> <b>Location</b> :- <a href={room.view}>View</a></p>
              </div>
            </div>
            <div className="col-md-7"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Details;





