import React, { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../../utils/apis";
import "./WeatherWidget.css";

const WeatherWidget = () => {
  const [currentWeather, setCurrentWeather] = useState({ name: "" });

  useEffect(async () => {
    const current = await fetchCurrentWeather(55407, setCurrentWeather);
    console.log("useEffect", current);
  }, []);
  const { name, main } = currentWeather;
  const temp = currentWeather?.main?.temp;

  return (
    <div className="weatherWidget">
      <p>City: {name}</p>
      <h3>Temp: {temp} degrees F</h3>
      <h3>Weather: </h3>
    </div>
  );
};

export default WeatherWidget;
