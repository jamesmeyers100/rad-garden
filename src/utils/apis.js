export const fetchZone = async (zip) => {
  const response = await fetch(`https://phzmapi.org/${zip}.json`);
  const zone = await response.json();
  return zone;
};

export const fetchCurrentWeather = async (zip, setWeather) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  const currentWeather = await response.json();
  setWeather(currentWeather);
  return currentWeather;
};
