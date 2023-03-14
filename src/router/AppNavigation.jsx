import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  WelcomePage,
  BookingPage,
  GameDetails,
  ProfilePage,
  EventPage,
  EventDetails,
  Menu,
  ItemDescription,
  CartPage,
} from "../components/Pages/";
import { Header } from "../components/Sections/";

function AppNavigation({ logout }) {
  return (
    <>
      <Routes>
        <Route index element={<WelcomePage router="app" />} />
        <Route
          path="home"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path="booking"
          element={
            <>
              <Header />
              <BookingPage />
            </>
          }
        />
        <Route
          path="events"
          element={
            <>
              <Header />
              <EventPage />
            </>
          }
        />
        <Route
          path="events/:eventId"
          element={
            <>
              <Header />
              <EventDetails />
            </>
          }
        />
        <Route path="game/:gameId" element={<GameDetails />} />
        <Route
          path="profile"
          element={
            <>
              <Header />
              <ProfilePage logout={logout} />
            </>
          }
        />
        <Route
          path="menu/:category"
          element={
            <>
              <Header />
              <Menu />
            </>
          }
        ></Route>
        <Route
          path="description"
          element={
            <>
              <Header />
              <ItemDescription />
            </>
          }
        />
        <Route
          path="cart"
          element={
            <>
              <Header />
              <CartPage />
            </>
          }
        />
        <Route path="*" element={<ErrorPage type="404" />} />
      </Routes>
    </>
  );
}

export default AppNavigation;
