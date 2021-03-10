import React from "react";
import SecondContentLeft from "./SecondContentLeft";
import SecondContentRight from "./SecondContentRight";
import MainConent from "./MainContent";
import "../styles/Content.css";

function Content({ weatherData }) {
    const {
        dt,
        humidity,
        pressure,
        wind_speed,
        pop,
        temp,
        weather,
    } = weatherData[0];
    return (
        <>
            {Object.keys(weatherData[0]).length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "100px" }}>
                    Loading...
                </p>
            ) : (
                <section className="content">
                    <SecondContentLeft
                        windSpeed={wind_speed}
                        rainProbability={pop}
                    />
                    <MainConent
                        weatherText={weather[0].main}
                        temperature={temp.day}
                        dt={dt}
                    />
                    <SecondContentRight
                        humidity={humidity}
                        pressure={pressure}
                    />
                </section>
            )}
        </>
    );
}

export default Content;
