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
        <Route path="Menu" element={<Menu />}></Route>
        <Route path="Description" element={<ItemDescription />} />
        <Route path="Salads" element={<MenuSalads />} />
        <Route path="Sandwichs" element={<MenuSandwich />} />
        <Route path="Board" element={<Board />} />
        <Route path="Drinks" element={<Drinks />} />
        <Route path="Sweet" element={<Sweet />} />
        <Route path="Cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage type="404" />} />
      </Routes>
    </>
  );
}

export default AppNavigation;
