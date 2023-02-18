import React from "react";
import { Route, Routes } from "react-router";
import {
  LoginPage,
  RegisterPage,
  ErrorPage,
  WelcomePage,
} from "../components/Pages";

function AuthNavigation() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage router="auth" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AuthNavigation;
