import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = function () {
  return (
    <div className="headerContainer">
      <nav>
        <h1>Rad Garden</h1>
        {/* <h3>Growing your own food is a radical act.</h3> */}
        <div className="navLinks">
          <Link to="garden">Garden</Link>
          <Link to="plants">Plants</Link>
          <Link to="Account">Account</Link>
        </div>
        <div className="weatherContainer"></div>
      </nav>
    </div>
  );
};

export default Header;
