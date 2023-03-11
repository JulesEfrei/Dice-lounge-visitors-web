import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  WelcomePage,
  BookingPage,
  GameDetails,
  ProfilePage,
} from "../components/Pages/";
import { Header } from "../components/Sections/";

function AppNavigation({ logout }) {
  const { pathname } = useLocation();

  const disbaledHeaderRoute = ["/game"];

  return (
    <>
      {pathname !== "/" ? <Header /> : null}
      <Routes>
        <Route index element={<WelcomePage router="app" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="game/:gameId" element={<GameDetails />} />
        <Route path="profile" element={<ProfilePage logout={logout} />} />
        <Route path="*" element={<ErrorPage type="404" />} />
      </Routes>
    </>
  );
}

export default AppNavigation;
