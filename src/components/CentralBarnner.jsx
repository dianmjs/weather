import React from "react";
import DaysFore from "./DaysFore";
import PlaceTo from "./PlaceTo";
import TopRow from "./TopRow";
import WorlWeather from "./WorlWeather";

const CentralBarnner = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className=" col-xs-6 col-sm-3 col-md-3 col-xl-3">
          <DaysFore />
        </div>
        <div className=" col-sm-6 col-md-3 col-xl-3">
          <PlaceTo />
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3">
          <TopRow />
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3">
          <WorlWeather />
        </div>
      </div>
    </div>
  );
};

export default CentralBarnner;
