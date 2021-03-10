import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        if (query === "" || !loading) return;

        getWeather(query).then(({ daily }) => setWeatherData(daily));
        setLoading(false);
        setLoadingDisplay(true);
    }, [query, loading]);

    const getWeather = async () => {
        const URL_CITY_SEARCH = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
        let data;

        try {
            const response = await fetch(URL_CITY_SEARCH);
            data = await response.json();
        } catch (error) {
            throw error;
        }
        console.log(data);
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
                    Welcome to React weather App! Search for Location :)
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
