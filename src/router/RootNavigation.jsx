import React, { useState } from "react";
import { useNavigate } from "react-router";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

function RootNavigation() {
  const [isConnected, setIsConnected] = useState(
    localStorage.getItem("userData") ? true : false
  );

  const navigate = useNavigate();

  const login = () => {
    setIsConnected(true);
  };
  const logout = () => {
    setIsConnected(false);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {isConnected ? (
        <AppNavigation logout={logout} />
      ) : (
        <AuthNavigation login={login} />
      )}
    </>
  );
}

export default RootNavigation;
