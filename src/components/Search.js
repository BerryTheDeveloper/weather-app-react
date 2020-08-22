import React, { useState } from "react";
import "../styles/Header.css";
import lightning from "../img/lightning-bulb.png";

function Search({ setQuery }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
    if (value !== "") setValue("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter location...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <img src={lightning} className="img" alt="cloud" />
      </form>
    </>
  );
}

export default Search;
