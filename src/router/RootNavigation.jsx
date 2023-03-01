import React, { useState } from "react";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

function RootNavigation() {
  const [isConnected, setIsConnected] = useState(
    localStorage.getItem("userData") ? true : false
  );

  const login = () => {
    setIsConnected(true);
  };
  const logout = () => setIsConnected(false);

  return (
    <>{isConnected ? <AppNavigation /> : <AuthNavigation login={login} />}</>
  );
}

export default RootNavigation;
