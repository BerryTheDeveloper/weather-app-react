import React from "react";
import SecondContentLeft from "./SecondContentLeft";
import SecondContentRight from "./SecondContentRight";
import MainConent from "./MainContent";
import "../styles/Content.css";

function Content({ locationData, rainProbability }) {
  return (
    <>
      {locationData.map(
        (
          {
            WeatherText,
            Temperature,
            LocalObservationDateTime,
            RelativeHumidity,
            Pressure,
            Wind,
          },
          index
        ) => (
          <section className="content" key={WeatherText}>
            <SecondContentLeft Wind={Wind} rainProbability={rainProbability} />
            <MainConent
              WeatherText={WeatherText}
              Temperature={Temperature}
              LocalObservationDateTime={LocalObservationDateTime}
            />
            <SecondContentRight
              RelativeHumidity={RelativeHumidity}
              Pressure={Pressure}
            />
          </section>
        )
      )}
    </>
  );
}

export default Content;
