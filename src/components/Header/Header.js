import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Digital Society Lab</div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="http://trybut.fail/dsl/research">PROJECTS</a>
          </li>
          <li>
            <a href="http://trybut.fail/dsl/traing">TRAINING</a>
          </li>
          <li>
            <a href="http://trybut.fail/dsl/publications">PUBLICATIONS</a>
          </li>
          <li>
            <a href="http://trybut.fail/dsl/people">PEOPLE</a>
          </li>
          <li>
            <a href="http://trybut.fail/dsl/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
