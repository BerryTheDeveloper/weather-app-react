import React from "react";
import { nav, img, location, form } from "../styles/Header.module.css";
import lightning from "../img/lightning-bulb.png";
import place from "../img/place-marker.png";

function Header() {
  return (
    <header>
      <div className={nav}>
        <div className={location}>
          <img src={place} className={img} alt="location" />
          <p>City</p>
        </div>
        <form className={form}>
          <input type="text" placeholder="Enter location...." />
          <img src={lightning} className={img} alt="cloud" />
        </form>
      </div>
    </header>
  );
}

export default Header;
