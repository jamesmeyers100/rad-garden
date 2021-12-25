import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div>
      <h1>Account Information</h1>
      <div>
        <h2>User Information</h2>
        <p>Name:</p>
        <p>Email:</p>
        <p>Zipcode:</p>
        <p>Growing Zone:</p>
      </div>
      <div>
        <h2>Garden Info</h2>
        <p>Name: </p>
        <p> Date Started: </p>
        <div>
          <h3>Plant List</h3>
          <p>Plant</p>
          <p>Plant</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
