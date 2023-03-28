import React from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
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
        <Link to="/" onClick={closeMobileMenu}>
          Digital Society Lab
        </Link>
      </div>
      {menuOpen ? closeIcon : burgerIcon}
      {menuOpen && (
        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </div>
  );
};

export default MobileNavigation;
