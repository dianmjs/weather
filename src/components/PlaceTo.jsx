import React from "react";
import arabia from "../Image/arabia.JPG";
import sitio from "../Image/sitio.png";

const PlaceTo = () => {
  return (
    <div className="place">
      <h3 className="tittle">
        {" "}
        <b>Place to</b>
      </h3>{" "}
      <p className="visit">Visit</p>
      <div className="placeTo">
        <img src={arabia} alt="" className="arabia" />
        <img src={sitio} className="sitio1" />
        <h6 className="local">
          <b>Arab Street</b>
        </h6>
        <p className="capit">
          <b>Singapore</b>
        </p>
      </div>
    </div>
  );
};

export default PlaceTo;
