import React from "react";
import museum from "../Image/museum.jpg";
import sitio from "../Image/sitio.png";
import pic1 from "../Image/pic1.jpg";
import pic2 from "../Image/pic2.jpg";
import pic3 from "../Image/pic3.jpg";
import fontain from "../Image/fontain.jpg";

const TopRow = () => {
  return (
    <div className="todRow">
      <div className="jumbotrons">
        <div className="container ">
          <div>
            <p className="conte">
              {" "}
              <b>+ Top Reviows</b>{" "}
            </p>
          </div>
          <div className="avatar1">
            <img src={pic1} alt="" className="pic1" />
          </div>
          <div className="avatar2">
            <img src={pic2} alt="" className="pic2" />
          </div>
          <div className="avatar3">
            <img src={pic3} alt="" className="pic3" />
          </div>
          <div className="avatar4">
            <p className="p4">
              {" "}
              <b>6 +</b>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="conteTopRow1">
        <img src={museum} alt="" className="art" />
        <img src={sitio} alt="" className="sitiotop" />
        <h6 className="museum">
          <b>Museum</b>
        </h6>
      </div>
      <br />
      <div className="conteTopRow2">
        <img src={fontain} alt="" className="fontain" />
        <img src={sitio} alt="" className="sitiotop2" />
        <h6 className="fountain">Fountain</h6>
        <div className="sum">
          <h1 className="mas">+</h1>
        </div>
      </div>
    </div>
  );
};

export default TopRow;
