import React from "react";
import { useGlobalContext } from "../../appContext";
import { BsArrowRight } from "react-icons/bs";

const Announcement = () => {
  const { homepageData } = useGlobalContext();
  if (homepageData && homepageData.length > 0) {
    const homeStatic = homepageData[0];
    if (homeStatic?.announcement && homeStatic?.announcementLink) {
      return (
        <a className="announcement-link" href={homeStatic.announcementLink}>
          <div className="announcement">
            <h3 className="bold-16">{homeStatic.announcement}</h3>
            <BsArrowRight />
          </div>
        </a>
      );
    }
  }
  return null;
};

export default Announcement;
