import React from "react";
import WatherBog from "./WatherBog";
import fondo from "../Image/fondo.jpg";
import sitio from "../Image/sitio.png";
import { ThemeContext } from "../context/ThemeProvider";

const TopBarnner = () => {
  const { temp } = React.useContext(ThemeContext);

  return (
    <div className="row barnner1">
      <img src={fondo} alt="" className="fondo" />
      <img src={sitio} alt="" className="portada" />
      <h6 className="bogota">{temp.name}</h6>
      <div>
        <WatherBog />
      </div>
    </div>
  );
};

export default TopBarnner;
