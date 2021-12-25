import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Plant from "./pages/Plants/Plant";
import Garden from "./pages/Garden/Garden";
import Account from "./pages/Account/Account";
import NoMatch from "./pages/NoMatch/NoMatch";
import { Layout } from "./components/Layout/Layout";
import Secured from "./pages/Secured/Secured";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="garden" element={<Garden />} />
            <Route path="plants" element={<Plant />} />
            <Route path="account" element={<Account />} />
            <Route path="secured" element={<Secured />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
