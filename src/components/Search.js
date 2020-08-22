import React, { useState } from "react";
import "../styles/Header.css";
import lightning from "../img/lightning-bulb.png";

function Search({ setQuery, setLoading }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(value);
    if (value !== "") setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter location...."
          value={value}
          onChange={handleChange}
        />
        <img src={lightning} className="img" alt="cloud" />
      </form>
    </>
  );
}

export default Search;
