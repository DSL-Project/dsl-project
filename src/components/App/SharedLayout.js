import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";
import { useGlobalContext } from "../../appContext";

const SharedLayout = () => {
  const { openMenu } = useGlobalContext();
  return (
    <>
      <Header />
      {openMenu || <Outlet />}
      <Footer />
    </>
  );
};

export default SharedLayout;
