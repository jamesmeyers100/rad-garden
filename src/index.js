import ReactDOM from "react-dom";
import React from "react";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import { GardenContext } from "./hooks/GardenContext";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const App = function () {
  return (
    <GardenContext>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </GardenContext>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

// serviceWorker.unregister();
