import React from "react";
import NavLinks from "./NavLinks";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerIcon = (
    <CgMenu className="burger" onClick={() => setMenuOpen(!menuOpen)} />
  );

  const closeIcon = (
    <CgClose className="burger" onClick={() => setMenuOpen(!menuOpen)} />
  );
  const closeMobileMenu = () => setMenuOpen(false);
  return (
    <div className="mobile-navigation">
      <div className="bold-18 logo">
        <a href="https://development-dsl.netlify.app/">Digital Society Lab</a>
      </div>
      {menuOpen ? closeIcon : burgerIcon}
      {menuOpen && (
        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </div>
  );
};

export default MobileNavigation;
