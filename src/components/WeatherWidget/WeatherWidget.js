import React, { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../../utils/apis";
import "./WeatherWidget.css";

const WeatherWidget = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const { name } = currentWeather;
  const temp = currentWeather?.main?.temp;
  const lat = currentWeather?.coord?.lat;
  const lon = currentWeather?.coord?.lon;
  const feels_like = currentWeather?.main?.feels_like;

  useEffect(async () => {
    const current = await fetchCurrentWeather(55407, setCurrentWeather);
    console.log("useEffect", current);
  }, []);

  return (
    <div className="weatherWidget">
      <h1>City of {name}</h1>
      <h3>Temp: {temp} degrees F</h3>
      <h3>Feels Like: {feels_like} degrees F</h3>
      <h3>Lat: {lat}</h3>
      <h3>Lon: {lon}</h3>
    </div>
  );
};

export default WeatherWidget;
