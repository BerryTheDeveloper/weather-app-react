import React from "react";
import humidity from "../img/humidity.png";
import airPressure from "../img/airPressure.png";

function SecondContentRight({ RelativeHumidity, Pressure }) {
  return (
    <div className="secondContent">
      <div className="secondContent-images">
        <img src={humidity} alt="" />
        <img src={airPressure} alt="" />
      </div>
      <div>
        <p>Humidity</p>
        <span>{RelativeHumidity}%</span>
        <p>Air Pressure</p>
        <span>
          {Pressure.Metric.Value} {Pressure.Metric.Unit.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default SecondContentRight;
