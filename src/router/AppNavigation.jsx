import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
  MenuSalads,
  MenuSandwich,
  Board,
  Drinks,
  Sweet,
  CartPage,
} from "../components/Pages/";
import { Header } from "../components/Sections/";

function AppNavigation({ logout }) {
  const { pathname } = useLocation();

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
        <Route path="menu" element={<Menu />}></Route>
        <Route path="description" element={<ItemDescription />} />
        <Route path="salads" element={<MenuSalads />} />
        <Route path="sandwichs" element={<MenuSandwich />} />
        <Route path="board" element={<Board />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="sweet" element={<Sweet />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage type="404" />} />
      </Routes>
    </>
  );
}

export default AppNavigation;
