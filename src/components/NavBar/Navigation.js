import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="bold-18 logo">
        <Link to="/">Digital Society Lab</Link>
      </div>
      <NavLinks />
    </div>
  );
};

export default Navigation;
