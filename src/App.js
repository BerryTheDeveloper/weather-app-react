import React, { useState, useEffect } from "react";
import { useGeolocation } from "./hooks/useGeolocation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [loadingDisplay, setLoadingDisplay] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [locationPlace, setLocationPlace] = useState("");
    const [locationData, setLocationData] = useState([]);
    const [fiveDaysData, setFiveDaysData] = useState([]);
    const [rainProbability, setRainProbability] = useState("");
    const geolocation = useGeolocation();

    useEffect(() => {
        if (!loading || Object.keys(geolocation).length === 0) return;
        if (geolocation.err !== null) {
            console.error(geolocation.err);
            return;
        }

        getWeather(geolocation).then(({ daily }) => setWeatherData(daily));
        setLoading(false);
        setLoadingDisplay(true);
    }, [loading, geolocation]);

    const getWeather = async (geo) => {
        const URL_CITY_SEARCH = `https://api.openweathermap.org/data/2.5/onecall?lat=${geo.lat}&lon=${geo.lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
        let data = {};
        console.log(geo);
        try {
            const response = await fetch(URL_CITY_SEARCH);
            data = await response.json();
        } catch (error) {
            throw error;
        }
        return data;
    };

    return (
        <>
            <Header
                query={query}
                setQuery={setQuery}
                loadingDisplay={loadingDisplay}
                setLoading={setLoading}
            />
            {weatherData.length === 0 || weatherData === "undefined" ? (
                <p style={{ textAlign: "center", fontSize: "100px" }}>
                    Welcome to React weather App! Loading your location...
                    Please wait :)
                </p>
            ) : (
                <>
                    <Content weatherData={weatherData} />
                    <Footer
                        fiveDaysData={weatherData.slice(1, weatherData.length)}
                    />
                </>
            )}
        </>
    );
}

export default App;
