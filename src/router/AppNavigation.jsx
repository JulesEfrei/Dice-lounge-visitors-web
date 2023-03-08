import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  WelcomePage,
  BookingPage,
  ProfilePage,
} from "../components/Pages/";
import { Menu } from "../components/Sections/";

function AppNavigation() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" ? <Menu /> : null}
      <Routes>
        <Route index element={<WelcomePage router="app" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default AppNavigation;
