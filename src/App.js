import React from "react";
import Header from "./components/Header";
import "./styles/App.css";
import rain from "./img/rainy.png";
import wind from "./img/wind.png";
import fog from "./img/fog.png";
import humidity from "./img/humidity.png";
import airPressure from "./img/airPressure.png";

function App() {
  return (
    <>
      <Header />
      <section className="content">
        <div className="secondContent">
          <div>
            <img src={rain} alt="" />
            <img src={wind} alt="" />
          </div>
          <div>
            <p>Chance Of Rain</p>
            <span>5%</span>
            <p>Wind Speed</p>
            <span>1.5 km/h</span>
          </div>
        </div>
        <div className="mainContent">
          <div>
            <img src={fog} alt="fog" className="fog" />
            <p>Fog</p>
          </div>
          <span>30C</span>
          <p>Sunday</p>
        </div>
        <div className="secondContent">
          <div>
            <img src={humidity} alt="" />
            <img src={airPressure} alt="" />
          </div>
          <div>
            <p>Humidity</p>
            <span>50%</span>
            <p>Air Pressure</p>
            <span>1009.483 PS</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
