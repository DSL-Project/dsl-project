import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";
import { useGlobalContext } from "../../appContext";
import LoadingState from "../LoadingState/LoadingState";

const SharedLayout = () => {
  const { openMenu, homepageData, isLoading } = useGlobalContext();

  if (isLoading) {
    return <LoadingState />;
  }

  if (!isLoading && homepageData) {
    const homeStatic = homepageData[0];

    return (
      <>
        <Header />
        {openMenu || <Outlet />}
        <Footer homeStatic={homeStatic} />
      </>
    );
  }
  return <Footer />;
};

export default SharedLayout;
