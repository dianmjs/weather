import React from "react";
import clima from "../Image/clima.png";
import nube from "../Image/nube.png";
import { DaysContext } from "../context/DaysProvider";
import moment from "moment";
import "moment/locale/en-in";

const DaysFore = () => {
  const { days } = React.useContext(DaysContext);

  //Convertir a entero
  const temprD = Math.round(days.temperatureD);
  const temprM = Math.round(days.temperatureM);
  const temprD2 = Math.round(days.temperatureD2);
  const temprM2 = Math.round(days.temperatureM2);
  const temprD3 = Math.round(days.temperatureD3);
  const temperM3 = Math.round(days.temperatureM3);
  console.log("temperatura dia 2", temprM2);

  return (
    <div className="daysfore">
      <h3 className="lettler">
        {" "}
        <b>3 Days</b>
      </h3>
      <p className="paraff">Forecast</p>

      <div className="weatherOneDay mt-5">
        <img src={nube} alt="" className="image1" />
        <h6 className="days">{moment(days.dia).format("dddd")}</h6>
        <p className="daysTemp">{days.estado}</p>
        <div className="weatherOneT">
          <h6 className="grade">
            {temprM}°/ {temprD}°
          </h6>
        </div>
      </div>
      <br />
      <div className="weatherOneDay">
        <img src={nube} alt="" className="image1" />
        <h6 className="days">{moment(days.dia2).format("dddd")}</h6>
        <p className="daysTemp">{days.estado2}</p>
        <div className="weatherOneT2">
          <h6 className="grade2">
            {temprM2}°/ {temprD2}°
          </h6>
        </div>
      </div>
      <br />
      <div className="weatherOneDay">
        <img src={nube} alt="" className="image1" />
        <h6 className="days">{moment(days.dia3).format("dddd")}</h6>
        <p className="daysTemp">{days.estado3}</p>
        <div className="weatherOneT2">
          <h6 className="grade2">
            {temperM3}°/ {temprD3}°
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DaysFore;
