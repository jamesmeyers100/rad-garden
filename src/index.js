import ReactDOM from "react-dom";
import React from "react";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const App = function () {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

// serviceWorker.unregister();
