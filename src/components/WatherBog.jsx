import React from "react";
import clima from "../Image/clima.png";
import lluvia from "../Image/lluvia.png";
import { ThemeContext } from "../context/ThemeProvider";

const WatherBog = () => {
  const { temp } = React.useContext(ThemeContext);
  const icon = temp.icon;
  return (
    <div className="contecBarnnerB">
      <div className="barnnerBogota">
        <div className="barnerBogota2 ">
          <h5 className="grados">{temp.temperature}°C</h5>
          <img
            className="clima1 "
            src={lluvia}
            //'http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'
          />
          <h6 className="cloudy">{temp.estado}</h6>
        </div>
      </div>
    </div>
  );
};

export default WatherBog;
