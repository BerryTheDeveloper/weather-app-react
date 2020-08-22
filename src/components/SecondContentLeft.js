import React from "react";
import rain from "../img/rainy.png";
import wind from "../img/wind.png";
function SecondContentLeft({ Wind, rainProbability }) {
  return (
    <div className="secondContent">
      <div className="secondContent-images">
        <img src={rain} alt="" />
        <img src={wind} alt="" />
      </div>
      <div>
        <p>Chance Of Rain</p>
        <span>{rainProbability}%</span>
        <p>Wind Speed</p>
        <span>
          {Wind.Speed.Metric.Value} {Wind.Speed.Metric.Unit}
        </span>
      </div>
    </div>
  );
}

export default SecondContentLeft;
