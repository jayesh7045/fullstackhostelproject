
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Details.css";
import { useParams } from "react-router-dom";
function Details() {
  const { roomid } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/rooms/getallrooms?roomid=${roomid}`);
        setLoading(false);

        // Check if response.data is defined and not empty
        if (Array.isArray(response.data) && response.data.length > 0) {
          // Find the room with the matching _id
          const matchingRoom = response.data.find((room) => room._id === roomid);
          console.log(matchingRoom)
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

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : room ? (
        <div>
          <div className="row">
            <div className="packer">
              <div className="centerimage">
                <img src={room.imageurls[0]} className="bigimage" alt="" />
              </div>
              <div className="datais">
                <h1>{room.name}</h1>
                <p>
                  <b>Maxcount</b> :- {room.maxCount}
                </p>
                <p>
                  <b>PhoneNumber</b> :- {room.phoneNumber}
                </p>
                <p>
                  <b>Rentpay</b> :- {room.rentPay}
                </p>
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


// import React, {useState, useEffect} from 'react'
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// function Details({match}) {
//   const [room, setroom] = useState({});
//   const [errors, seterrors] = useState();
//   const [loading, setloading] = useState(true);
//   const {id} = useParams();
//   useEffect(() => {
//     const fetchData = async () => {
      
//       try {
//         const response = await axios.post("/api/rooms/getroombyid", {roomid : id}).data;
        
//         console.log("hi")
        
//         setloading(false);
//         setroom(response);
//         console.log(response);
//       } catch (error) {
//         seterrors(true);
//         console.log(error);
//         setloading(false);
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <h1>yes</h1>

//     </div>
//   )
// }

// export default Details



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function Details({ match }) {
// //   const [rooms, setroom] = useState([]);
// //   const [errors, seterrors] = useState();
// //   const [loading, setloading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.post("/api/rooms/getroombyid", { roomid: match.params.roomid });
// //         const data = response.data;
// //         console.log(data);
// //         setloading(false);
// //         setroom(data);
// //       } catch (error) {
// //         seterrors(true);
// //         console.log(error);
// //         setloading(false);
// //       }
// //     };

// //     fetchData(); // Call the async function
// //   }, [match.params.roomid]);

// //   return (
// //     <div>
// //       <h1>Hello world</h1>
// //       <h1>yes</h1>
// //     </div>
// //   )
// // }

// // export default Details;
