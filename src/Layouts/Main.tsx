import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
