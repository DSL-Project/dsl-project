import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Digital Society Lab</div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="https://development-dsl.netlify.app/projects">PROJECTS</a>
          </li>
          <li>
            <a href="https://development-dsl.netlify.app/training">TRAINING</a>
          </li>
          <li>
            <a href="https://development-dsl.netlify.app/publications">
              PUBLICATIONS
            </a>
          </li>
          <li>
            <a href="https://development-dsl.netlify.app/people">PEOPLE</a>
          </li>
          <li>
            <a href="https://development-dsl.netlify.app/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
