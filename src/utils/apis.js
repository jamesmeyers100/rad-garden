export const fetchZone = async (zip) => {
  const response = await fetch(`https://phzmapi.org/${zip}.json`);
  const zone = await response.json();
  return zone;
};

export const fetchCurrentWeather = async (zip) => {
  console.log("this is zip", zip);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  console.log("this is response", response);
  const currentWeather = await response.json();
  console.log("currentWeather", currentWeather);
  return currentWeather;
};
