import React from "react";
import { useSelector } from "react-redux";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";

const AppLayout = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) return <AuthPage />;

  return <HomePage />;
};

export default AppLayout;
