import React from "react";
import "./Filters.css";
function Filters() {
  return (
    <div className="filters">
      <h1>Wifi Avalability</h1>

      <div>
        <input type="radio" name="wifi" className="wifi1" />
        <label htmlFor="">Yes</label>
      </div>
      <div>
        <input type="radio" name="wifi" />
        <label>No</label>
      </div>

      <br />
      <br />
      <h1>Number of Sharings</h1>
      <div className="radios">
        <div className="one x">
          <label htmlFor="">1</label>
          <input type="checkbox" className="" />
        </div>
        <div className="two x">
          <label htmlFor="">2</label>
          <input type="checkbox" className="" />
        </div>
        <div className="three x">
          <label htmlFor="">3</label>
          <input type="checkbox" className="" />
        </div>
        <div className="four x">
          <label htmlFor="">4</label>
          <input type="checkbox" className="" />
        </div>
        <div className="five x">
          <label htmlFor="">5</label>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default Filters;
