import React from "react";
import fog from "../img/fog.png";
import "../styles/MainContent.css";

function MainContent({ weatherText, temperature, dt }) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday ",
        "Friday",
        "Saturday",
    ];
    const day = days[new Date(dt * 1000).getDay()];
    return (
        <div className="mainContent">
            <div className="mainContent-tags">
                <img src={fog} alt="fog" className="fog" />
                <p>{weatherText}</p>
            </div>
            <span>{temperature}°C</span>
            <p>{day}</p>
        </div>
    );
}

export default MainContent;
