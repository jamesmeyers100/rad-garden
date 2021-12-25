import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LogoutFunc = function () {
  const navigate = useNavigate();
  const state = useLocation();

  const logout = (props) => {
    navigate("/", { state: props.keycloak });
    console.log("this is logout state", state);
  };
  return (
    <div>
      <button onClick={() => logout("/")}>Logout</button>
    </div>
  );
};

export default LogoutFunc;
