import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  ErrorPage,
  WelcomePage,
} from "../components/Pages";

function AuthNavigation({ login }) {
  return (
    <Routes>
      <Route index element={<WelcomePage router="auth" />} />
      <Route path="login" element={<LoginPage login={login} />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage type="400" />} />
    </Routes>
  );
}

export default AuthNavigation;
