import React, { useState } from "react";
import Header from "../components/Header/Header";
import { fetchZone } from "../utils/apis";
import { getAllGardens } from "../utils/garden.api";

const Main = function () {
  const [zipCode, setZipcode] = useState(null);
  const [zone, setZone] = useState({ zone: "" });

  const submit = async () => {
    let blerp = await fetchZone(zipCode);
    console.log(blerp);
    setZone(blerp);
  };

  return (
    <div>
      <Header />
      <h1>Growing Zone Finder</h1>
      <label> Enter Your Zip Code to Find Your Growing Zone: </label>
      <input
        type="text"
        placeholder="Zip Code"
        onChange={(event) => setZipcode(event.target.value)}
      />
      <button id="submitButton" onClick={submit} type="submit">
        Submit
      </button>
      <div>
        <h2>Your growing zone: {zone.zone}</h2>
        <h2>Your temperature range: {zone.temperature_range}</h2>
      </div>
      <div>
        <button onClick={() => getAllGardens()}>See Gardens</button>
      </div>
    </div>
  );
};

export default Main;
