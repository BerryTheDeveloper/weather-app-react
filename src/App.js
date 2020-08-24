import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("Radomsko");
  const [loading, setLoading] = useState(true);
  const [loadingDisplay, setLoadingDisplay] = useState(false);
  const [locationKey, setLocationKey] = useState("");
  const [locationPlace, setLocationPlace] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [fiveDaysData, setFiveDaysData] = useState([]);
  const [rainProbability, setRainProbability] = useState("");

  useEffect(() => {
    if (query === "" || !loading) return;
    const URL_CITY_SEARCH = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_APIKEY}&q=${query}`;
    fetch(URL_CITY_SEARCH)
      .then((respone) => respone.json())
      .then((data) => {
        setLocationPlace(data[0].EnglishName);
        setLocationKey(data[0].Key);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [query, loading]);

  useEffect(() => {
    if (locationKey === "") return;
    const URL_WEATHER_SEARCH = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_APIKEY}&details=true`;
    const URL_RAIN_SEARCH = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_APIKEY}&details=true&metric=true`;

    const weatherSearch = fetch(URL_WEATHER_SEARCH)
      .then((respone) => respone.json())
      .then((data) => {
        setLocationData(data);
      })
      .catch((err) => console.log(err));

    const weatherSearchRain = fetch(URL_RAIN_SEARCH)
      .then((respone) => respone.json())
      .then((data) => {
        setRainProbability(data.DailyForecasts[0].Day.RainProbability);
        setFiveDaysData(data.DailyForecasts.slice(1));
      })
      .catch((err) => console.log(err));

    if (weatherSearch && weatherSearchRain) setLoadingDisplay(true);
  }, [locationKey]);

  return (
    <>
      <Header
        locationPlace={locationPlace}
        setQuery={setQuery}
        loadingDisplay={loadingDisplay}
        setLoading={setLoading}
      />
      {!loadingDisplay ? (
        <p style={{ textAlign: "center", fontSize: "100px" }}>
          Welcome to React Weather App! Search for Location :)
        </p>
      ) : (
        <>
          <Content
            locationData={locationData}
            rainProbability={rainProbability}
          />
          <Footer fiveDaysData={fiveDaysData} />
        </>
      )}
    </>
  );
}

export default App;
