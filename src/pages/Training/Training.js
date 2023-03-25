import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../appContext";
import Banner from "../../components/Banner/Banner";

const Training = () => {
  const { response, trainingBody, trainingTitle } = useGlobalContext();
  console.log(`data for training page: `, response);
  return (
    <div className="training">
      {/* This section will be dynamically rendered from CMS static content model
      //TODO: 1. trainingTitle and trainingBody from: CMS - Static
      */}
      <Banner title={trainingTitle} info={trainingBody} />
      <div className="training-wrapper">
        <div className="training-container">
          <h2>Master of Public Policy in Digital Society</h2>
          <p className="regular-16">
            The Master of Public Policy in Digital Society is a professional
            graduate degree program that offers an innovative curriculum which
            seeks to bridge public policy thinking with technical expertise. The
            program trains prospective policy leaders to navigate the rapidly
            changing dynamics of the technological landscape so as to more
            effectively address the complex social, political, and economic
            challenges that have accompanied the digital age.
          </p>
          <p className="bold-16 training-link">
            To learn more about the program and apply,visit
            <a href="https://socialsciences.mcmaster.ca/master-of-public-policy">
              &nbsp;socialsciences.mcmaster.ca/master-of-public-policy
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="training-wrapper">
        <div className="training-container">
          <h2>Postdoctoral and Doctoral Fellowships</h2>
          <p className="regular-16">
            The Master of Public Policy in Digital Society is a professional
            graduate degree program that offers an innovative curriculum which
            seeks to bridge public policy thinking with technical expertise. The
            program trains prospective policy leaders to navigate the rapidly
            changing dynamics of the technological landscape so as to more
            effectively address the complex social, political, and economic
            challenges that have accompanied the digital age.
          </p>
          <p className="bold-16 training-link">
            <span>To learn more about the program and apply, visit</span>
            <a href="https://www.digitalsocietylab.org/contact-us">
              &nbsp;digitalsocietylab.org/contact-us
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Training;
