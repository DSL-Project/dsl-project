import React from "react";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="bold-18 logo">
        <a href="https://development-dsl.netlify.app/">Digital Society Lab</a>
      </div>
      <NavLinks />
    </div>
  );
};

export default Navigation;
