import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../Parts/Room";
import Navbar from "../Parts/Navbar";
import "./HomeScreen.css";
import img from "../Parts/whiteback.jpg";

function HomeScreen() {
  const [rooms, setRooms] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [valwifi, setValwifi] = useState(false);
  const [valwashing, setValwashing] = useState(false);
  const [valrent, setValrent] = useState(false);
  const [wificolor, setwificolor] = useState(false);
  const [washingcolor, setwashingcolor] = useState(false);
  const [rentcolor, setrentcolor] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/rooms/getallrooms");
        const data = response.data;
        setLoading(false);
        setRooms(data);
        setErrors(false);
      } catch (error) {
        setErrors(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleWifi = () => {
    setValwifi((prevState) => !prevState);
    setwificolor((prevState) => !prevState);
  };

  const handlerent = () => {
    setValrent((prevState) => !prevState);
    setrentcolor((prevState) => !prevState);
  };

  const handlewashing = () => {
    setValwashing((prevState) => !prevState);
    setwashingcolor((prevState) => !prevState);
  };

  const filteredRooms = rooms.filter((room) => {
    return (
      (!valwifi || (valwifi && room.wifi_availability.toLowerCase() === "yes")) &&
      (!valwashing || (valwashing && room.washing_machine_availability.toLowerCase() === "yes")) &&
      (!valrent || (valrent && Number.parseInt(parseInt(room.rent.replace(/[^0-9]/g, ''), 10)) < 10000))
    );
  });

  return (
    <div>
      <Navbar />
      <div className="cool">
        <div className="maincont mt-3">
          <div className="byn pt-5">
            <h1 className="filtersz">Filter by</h1>
            <h1>
              <hr />
            </h1>
            <button
              type="button"
              className={
                (wificolor ? "active" : "") +
                `btn btn-primary btn-lg wifi bttn_`
              }
              onClick={() => handleWifi()}
            >
              {" "}
              wifi{" "}
            </button>
            <br />
            <br />
            <button
              type="button"
              className={
                (washingcolor ? "active" : "") +
                `btn btn-primary btn-lg washing bttn_`
              }
              onClick={() => handlewashing()}
            >
              {" "}
              Washing Machine{" "}
            </button>
            <br />
            <br />
            <button
              type="button"
              className={
                (rentcolor ? "active" : "") +
                `btn btn-primary btn-lg rent bttn_`
              }
              onClick={() => handlerent()}
            >
              {" "}
              Rent:- 0 - 2000{" "}
            </button>
            <br />
            <br />
          </div>
          <div className="details">
            <div className="eachroom">
              {loading ? (
                <h1>Loading....</h1>
              ) : errors ? (
                <h1>Errors</h1>
              ) : (
                filteredRooms.map((room) => (
                  <div className="col-md-9" key={room.id}>
                    <Room props={room} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
