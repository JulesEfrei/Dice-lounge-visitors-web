import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { HomePage, ErrorPage, WelcomePage } from "../components/Pages/";
import { Menu } from "../components/Sections/";

function AppNavigation() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" ? <Menu /> : null}
      <Routes>
        <Route path="/" element={<WelcomePage router="app" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default AppNavigation;
