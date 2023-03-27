import React from "react";
import { Outlet } from "react-router-dom";
//import Header from '../Header';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
