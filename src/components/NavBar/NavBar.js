import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <div className="nav-bar">
      {/* <div className="bold-18 logo">Digital Society Lab</div> */}
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
