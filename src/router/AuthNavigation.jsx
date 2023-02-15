import React from "react";
import { Route, Routes } from "react-router";
import { LoginPage, RegisterPage, ErrorPage } from "../components/Pages";

function AuthNavigation() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AuthNavigation;
