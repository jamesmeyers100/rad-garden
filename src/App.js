import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Plant from "./pages/Plants/Plant";
import Garden from "./pages/Garden/Garden";
import Account from "./pages/Account/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/garden" component={<Garden />} />
          <Route path="/plant" component={<Plant />} />
          <Route path="/account" component={<Account />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
