import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
// import { Footer } from "../../components/Footer/Footer";

export default function Layout() {
  return (
    <div className="font-merriweather pb-6">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
