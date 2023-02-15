import React from "react";
import { Route, Routes } from "react-router";
import { HomePage, ErrorPage } from "../components/Pages/";

function AppNavigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppNavigation;
