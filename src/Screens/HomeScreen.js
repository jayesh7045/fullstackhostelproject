import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../Parts/Room";
import Navbar from "../Parts/Navbar";
import "./HomeScreen.css";
import img from "../Parts/whiteback.jpg"
function HomeScreen() {
  const [rooms, setRooms] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [valwifi, setValwifi] = useState(false);
  const [valwashing, setValwashing] = useState(false);
  const [valrent, setValrent] = useState(false);
  const [wifiRooms, setWifiRooms] = useState([]);
  const[wificolor, setwificolor] = useState(false);
  const[washingcolor, setwashingcolor] = useState(false);
  const[rentcolor, setrentcolor] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/rooms/getallrooms");
        const data = response.data;
        console.log(data);
        setLoading(false);
        setRooms(data);
        setErrors(false);
        const wifiRoomsData = data.filter((room) => room.wifi_availability.toLowerCase() === "yes");
        const Rentrooms = data.filter((room)=>(Number.parseInt(room.rentPay) > 1000));
        const WashingRooms = data.filter((room)=>(room.washing_machine_availability.toLowerCase() === "yes")); 
        setWifiRooms(wifiRoomsData);
      } catch (error) {
        setErrors(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleWifi=()=>{
    return(
      setValwifi((prevState) => !prevState),
      setwificolor((prevState)=> !prevState)
    )
  }
  const handlerent=()=>{
    return (
      setValrent((prevState)=>!prevState),
      setrentcolor((prevState)=>!prevState)
    )
  }
  const handlewashing=()=>{
    return (
      setValwashing((prevState)=>!prevState),
      setwashingcolor((prevState)=>!prevState)
    )
  }


  const Functo=(val1, val2, val3, data)=>{
    if(val1)
    {
      const wifiRoomsData = data.filter((room) => room.category === "wifi");
      data = wifiRooms;
    }
    if(val2)
    {
      const rentRoomsData = data.filter((room) => (room.rentPay < 2000)); 
      data = rentRoomsData;
    }
    if(val3)
    {
      const washingrooms = data.filter((room)=>room.washingMachine === ("available"));
      data = washingrooms;
    }
    return (
      <div className="eachroom">
        {loading ? (
        <h1>Loading....</h1>
      ) : errors ? (
        <h1>Errors</h1>
      ) : data.map((room) => (
          <div className="col-md-9" key={room.id}>
            <Room props={room} />
          </div>
        ))
  }
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <div className="cool">
        <div className="maincont mt-3">
          <div className="byn pt-5">
            <h1 className="filtersz">Filter by</h1>
            <h1><hr /></h1>
            <button type="button" class= {(wificolor ? "active":"") + `btn btn-primary btn-lg wifi bttn_`} onClick={() => handleWifi()}>  wifi </button>
            <br />
            <br />
            <button type="button" class={(washingcolor ?"active":"") + `btn btn-primary btn-lg washing bttn_`} onClick={() => handlewashing()}>  Washing Machine </button>
            <br />
            <br />
            <button type="button" class={(rentcolor ?"active":"") + `btn btn-primary btn-lg rent bttn_`}  onClick={() => handlerent()}>  Rent:- 0 - 2000  </button>
            <br />
            <br />
            
            <br />
          </div>
          <div className="details">
            {Functo(valwifi, valrent, valwashing, rooms)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
