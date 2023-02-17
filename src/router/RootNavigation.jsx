import React from "react";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

function RootNavigation() {
  //TO-DO => Test if the user is connected
  const isConnected = true;

  return <>{isConnected ? <AppNavigation /> : <AuthNavigation />}</>;
}

export default RootNavigation;
