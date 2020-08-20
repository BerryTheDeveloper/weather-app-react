import React from "react";
import Search from "./Search";
import { nav, img, location } from "../styles/Header.module.css";
import placeMarker from "../img/placeMarker.png";

function Header() {
  return (
    <header>
      <div className={nav}>
        <div className={location}>
          <img src={placeMarker} className={img} alt="location" />
          <p>City</p>
        </div>
        <Search />
      </div>
    </header>
  );
}

export default Header;
