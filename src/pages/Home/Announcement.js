import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Announcement = () => {
  return (
    <a
      className="announcement-link"
      href="http://trybut.fail/dsl/opportunities"
    >
      <div className="announcement">
        <h3 className="bold-16">
          The Lab is looking for a new Director of Cliff Services.
        </h3>
        <AiOutlineArrowRight />
      </div>
    </a>
  );
};

export default Announcement;
