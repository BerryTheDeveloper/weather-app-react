import React from "react";
import humidityIcon from "../img/humidity.png";
import airPressureIcon from "../img/airPressure.png";

function SecondContentRight({ humidity, pressure }) {
    return (
        <div className="secondContent">
            <div className="secondContent-images">
                <img src={humidityIcon} alt="" />
                <img src={airPressureIcon} alt="" />
            </div>
            <div>
                <p>Humidity</p>
                <span>{humidity}%</span>
                <p>Air Pressure</p>
                <span>{pressure} hPa</span>
            </div>
        </div>
    );
}

export default SecondContentRight;
