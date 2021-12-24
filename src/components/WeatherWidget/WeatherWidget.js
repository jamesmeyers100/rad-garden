import React, { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../../utils/apis";
import "./WeatherWidget.css";

const WeatherWidget = () => {
  const [currentWeather, setCurrentWeather] = useState("");
  useEffect(async () => {
    const current = await fetchCurrentWeather(55407);
    console.log("useEffect", current);
    return () => {
      setCurrentWeather(current);
    };
  }, []);

  return (
    <div className="weatherWidget">
      <h3>Temp:</h3>
      <h3>Weather: </h3>
    </div>
  );
};

export default WeatherWidget;
