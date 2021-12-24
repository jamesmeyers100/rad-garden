import React from "react";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
import "./Header.css";

const Header = function () {
  return (
    <div className="headerContainer">
      <h1>Rad Garden</h1>
      {/* <h3>Growing your own food is a radical act.</h3> */}
      <div className="navLinks">
        <a>Zones</a>
        <a>Plants</a>
      </div>
      <div className="weatherContainer">
          <WeatherWidget />
      </div>
    </div>
  );
};

export default Header;
