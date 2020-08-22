import React from "react";
import fog from "../img/fog.png";
import "../styles/MainContent.css";

function MainContent({ WeatherText, Temperature, LocalObservationDateTime }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday ",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const day = days[new Date(LocalObservationDateTime).getDay()];
  return (
    <div className="mainContent">
      <div className="mainContent-tags">
        <img src={fog} alt="fog" className="fog" />
        <p>{WeatherText}</p>
      </div>
      <span>
        {Temperature.Metric.Value}°{Temperature.Metric.Unit}
      </span>
      <p>{day}</p>
    </div>
  );
}

export default MainContent;
