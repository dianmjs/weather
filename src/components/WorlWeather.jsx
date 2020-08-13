import React from "react";
import solNub from "../Image/nubysol.png";
import sol from "../Image/dom.png";
import locationWorld from "../Image/locationsWorl.jpg";
import { FranceContext } from "../context/FranceProvider";

const WorlWeather = () => {
  const { temF } = React.useContext(FranceContext);
  const temper = Math.round(temF.temperatureF);

  return (
    <div className="contefrance">
      <div className="worlWeather1">
        <h5 className="gradworl">29°</h5>
        <h5 className="cityworl">Lyon</h5>
        <p className="countryworl">Francia</p>
        <p className="humidity">Humidity 84</p>
        <p className="wost">Wost</p>
        <p className="km">83km/h</p>
        <div className="worlWeather2">
          <img src={sol} alt="" className="franceT" />
        </div>
      </div>
      <br />
      <div className="worlWeather11">
        <h5 className="gradworl">{temper}°</h5>
        <h5 className="cityworl">Francia</h5>
        <p className="countryworl">{temF.nameF}</p>
        <p className="humidity">Humidity {temF.humidity}</p>
        <p className="wost">Pressure</p>
        <p className="km">{temF.presion}</p>
        <div className="worlWeather22">
          <img src={solNub} alt="" className="franceT" />
        </div>
      </div>
      <br />
      <div className="map">
        <div className="locations">
          <p className="locationP">App Locations</p>
        </div>
        <img src={locationWorld} alt="" className="locationWorl" />
      </div>
    </div>
  );
};

export default WorlWeather;
