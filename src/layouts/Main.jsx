import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signUp";
  return (
    <div>
      <ScrollRestoration />
      {!isSignUpPage && <Navbar />}
      <Outlet />
      {!isSignUpPage && <Footer />}
    </div>
  );
};

export default Main;
