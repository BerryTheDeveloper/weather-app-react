import React from "react";
import "../styles/Footer.css";
import arrowBack from "../img/arrowBack.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={arrowBack}
      className={className}
      style={{
        ...style,
        transform: "translateY(-50%) rotate(180deg)",
        width: "60px",
        height: "60px",
        top: "50%",
        right: "-5%",
      }}
      alt="nextArrow"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={arrowBack}
      className={className}
      style={{
        ...style,
        transform: "translateY(-50%)",
        width: "60px",
        height: "60px",
        top: "50%",
        left: "-5%",
      }}
      alt="prevArrow"
      onClick={onClick}
    />
  );
}

function Footer({ fiveDaysData }) {
  const card = [1, 2, 3, 4, 5, 6, 7];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday ",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = days[new Date().getDay()];
  // const temp =
  //   (fiveDaysData[0].Temperature.Maximum.Value +
  //     fiveDaysData[0].Temperature.Miniumum.Value) /
  //   2;
  // const realTemp =
  //   (fiveDaysData[0].RealFeelTemperature.Maximum.Value +
  //     fiveDaysData[0].RealFeelTemperature.Miniumum.Value) /
  //   2;
  // console.log(day, temp, realTemp);
  // console.log(fiveDaysData[0].Day);

  const settings = {
    dots: false,
    slidesToShow: 5,
    speed: 500,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <footer>
      <div className="carousel">
        <Slider {...settings}>
          {fiveDaysData.map(({ Date, Temperature, RealFeelTemperature }) => (
            <div className="card">
              <span className="title">Monday</span>
              <span className="temp"> 28 C</span>
              <span className="real-temp">Feels like 30 C</span>
            </div>
          ))}
        </Slider>
      </div>
    </footer>
  );
}

export default Footer;
