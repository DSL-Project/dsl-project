import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="regular-caps">
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/projects">PROJECTS</Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/training">TRAINING</Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/publications">PUBLICATIONS</Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="people">PEOPLE</Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="contact">CONTACT</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
