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
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday ",
        "Friday",
        "Saturday",
    ];
    console.log(fiveDaysData);
    let daysData = [];
    if (fiveDaysData.length === 0) {
        daysData = [...daysData];
    } else {
        daysData = fiveDaysData.map((day) => {
            return {
                date: days[new Date(day.dt * 1000).getDay()],
                temp: ((day.temp.max + day.temp.min) / 2).toFixed(2),
                realTemp: (
                    (day.feels_like.day +
                        day.feels_like.night +
                        day.feels_like.morn +
                        day.feels_like.eve) /
                    4
                ).toFixed(2),
            };
        });
    }

    const settings = {
        dots: false,
        slidesToShow: 4,
        speed: 500,
        infinite: false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <footer>
            {daysData.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "100px" }}>
                    Loading...
                </p>
            ) : (
                <div className="carousel">
                    <Slider {...settings}>
                        {daysData.map((day) => (
                            <div className="card" key={day.date}>
                                <span className="title">{day.date}</span>
                                <span className="temp">{day.temp}°C</span>
                                <span className="real-temp">
                                    Feels like {day.realTemp}°C
                                </span>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </footer>
    );
}

export default Footer;
