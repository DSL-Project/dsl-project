import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Training = () => {
  return (
    <div>
      <Header />

      {/* This section will be dynamically rendered from CMS static content model 
      //TODO: 1. trainingTitle and trainingBody from: CMS - Static
      //TODO: 2. use the same style as other pages
      */}
      <div>
        <h2>Training</h2>
        <p>
          Section description faculty members in our department are actively
          exploring the implications of digital technology for both democratic
          and authoritarian regimes, as well as its transformative role in
          global governance.
        </p>
      </div>
      <div>
        <h3>Master of Public Policy in Digital Society</h3>
        <p>
          The Master of Public Policy in Digital Society is a professional
          graduate degree program that offers an innovative curriculum which
          seeks to bridge public policy thinking with technical expertise. The
          program trains prospective policy leaders to navigate the rapidly
          changing dynamics of the technological landscape so as to more
          effectively address the complex social, political, and economic
          challenges that have accompanied the digital age.
        </p>
        <p>
          To learn more about the program and apply, visit
          <Link to="https://socialsciences.mcmaster.ca/master-of-public-policy">
            socialsciences.mcmaster.ca/master-of-public-policy
          </Link>
        </p>
      </div>
      <div>
        <h3>Postdoctoral and Doctoral Fellowships</h3>
        <p>
          The Master of Public Policy in Digital Society is a professional
          graduate degree program that offers an innovative curriculum which
          seeks to bridge public policy thinking with technical expertise. The
          program trains prospective policy leaders to navigate the rapidly
          changing dynamics of the technological landscape so as to more
          effectively address the complex social, political, and economic
          challenges that have accompanied the digital age.
        </p>
        <p>
          To learn more about the program and apply, visit
          <Link to="https://www.digitalsocietylab.org/contact-us">
            digitalsocietylab.org/contact-us
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Training;
