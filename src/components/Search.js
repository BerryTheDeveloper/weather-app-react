import React, { useState } from "react";
import { img, form } from "../styles/Header.module.css";
import lightning from "../img/lightning-bulb.png";

function Search() {
  const [locationValue, setLocationValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationValue(e.target.location.value);
    console.log(locationValue);
    e.target.reset();
  };
  return (
    <>
      <form className={form} onSubmit={handleSubmit}>
        <input type="text" name="location" placeholder="Enter location...." />
        <img src={lightning} className={img} alt="cloud" />
      </form>
    </>
  );
}

export default Search;
