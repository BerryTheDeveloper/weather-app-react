import React from "react";
import rainIcon from "../img/rainy.png";
import windIcon from "../img/wind.png";
function SecondContentLeft({ windSpeed, rainProbability }) {
    return (
        <div className="secondContent">
            <div className="secondContent-images">
                <img src={rainIcon} alt="" />
                <img src={windIcon} alt="" />
            </div>
            <div>
                <p>Chance Of Rain</p>
                <span>{rainProbability}%</span>
                <p>Wind Speed</p>
                <span>{windSpeed} m/s</span>
            </div>
        </div>
    );
}

export default SecondContentLeft;
