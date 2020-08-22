import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [locationKey, setLocationKey] = useState("");
  const [locationPlace, setLocationPlace] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [rainProbability, setRainProbability] = useState("");

  useEffect(() => {
    const URL_CITY_SEARCH = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_APIKEY}&q=${query}&language=en-us&offset=5`;
    fetch(URL_CITY_SEARCH)
      .then((respone) => respone.json())
      .then((data) => {
        setLocationPlace(data[0].EnglishName);
        setLocationKey(data[0].Key);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    if (!loading) {
      const URL_WEATHER_SEARCH = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_APIKEY}&details=true`;
      const URL_RAIN_SEARCH = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${process.env.REACT_APP_APIKEY}&details=true`;

      fetch(URL_WEATHER_SEARCH)
        .then((respone) => respone.json())
        .then((data) => {
          setLocationData(data);
        })
        .catch((err) => console.log(err));

      fetch(URL_RAIN_SEARCH)
        .then((respone) => respone.json())
        .then((data) => {
          setRainProbability(data.DailyForecasts[0].Day.RainProbability);
        })
        .catch((err) => console.log(err));
    }
  }, [query, loading, locationKey]);

  return (
    // <>
    //   {loading ? (
    //     <p style={{ textAlign: "canter" }}>Loading...</p>
    //   ) : (
    <>
      <Header locationPlace={locationPlace} setQuery={setQuery} />
      <Content locationData={locationData} rainProbability={rainProbability} />
    </>
    //   )}
    // </>
  );
}

export default App;
