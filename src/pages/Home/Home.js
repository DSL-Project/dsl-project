import Announcement from "./Announcement";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import ProjectsCarousel from "./ProjectsCarousel";

function Home() {
  return (
    <div className="home">
      {/* This is the announcement banner:
      //TODO: 1. the link is clickable to a page called "Opportunities" which may need to be dynamically populated as hiring opportunities can change over time
       */}
      <Announcement />

      <div className="home-wrapper">
        <div className="welcome-container">
          <h1>Welcome to the Digital Society Lab</h1>
          <p className="regular-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            justo nunc, ornare eget rutrum at, tristique ut nibh. Phasellus in
            lobortis justo. Suspendisse ac dui sit amet elit porttitor
            elementum. Nulla a tincidunt arcu. Curabitur molestie lectus
            vestibulum, posuere nunc eu, iaculis ligula. Aenean quis odio
            pellentesque, faucibus massa nec, pretium dui. Curabitur id quam ut
            nibh convallis mollis. Nunc accumsan tempor sapien ac consectetur.
            Donec pulvinar ultricies lectus, sed euismod ex consectetur et.
            Nullam rhoncus risus eros, a dignissim risus fringilla sed. Fusce
            semper ac sapien a pulvinar.
          </p>
          <div className="recent-projects">
            <Link
              to="project-carousel"
              smooth={true}
              duration={500}
              className="bold-18"
            >
              See recent projects
            </Link>
            <AiOutlineArrowDown />
          </div>
        </div>
        <div id="project-carousel">
          <ProjectsCarousel />
        </div>
        <div className="funding-container">
          <h2>Made possible with funding from:</h2>
          {/* This is the "funded by" section
          //TODO: 1. this will likely be statically coded for now but may need to switch to clickable icons; buttons need to be replaced by anchors/Links
          //TODO: 2. style: icons will be flexed
          */}
          <div className="funding-logos">
            <div className="funder-logo"></div>
            <div className="funder-logo"></div>
            <div className="funder-logo"></div>
            <div className="funder-logo"></div>
            <div className="funder-logo"></div>
          </div>
        </div>
        <div className="home-contact">
          <div className="home-address">
            <div className="home-name">
              <div className="bold-18">Digital Society Lab</div>

              <div className="media-container">
                <a
                  href="https://twitter.com/DigSocietyLab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/DigSocietyLab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
            <div className="street-address bold-18">
              <p>1280 Main St</p>
              <p>WHamilton,</p>
              <p>ONL8S4L8</p>
            </div>
            <div className="contact-methods bold-16">
              <div>Phone</div>
              <div>555-555-5555</div>
              <div>Email</div>
              <div>
                <a href="mailto: webmaster@digitalsocietylab.org">
                  webmaster@digitalsocietylab.org
                </a>
              </div>
            </div>
          </div>
          <div className="stay-updated">
            <h2>Stay updated with the Digital Society Lab</h2>
            <form action="">
              <input
                id="sign-up"
                type="email"
                placeholder="email@address.com"
                className="regular-14"
              />

              <label sr-only="true" htmlFor="sign-up" />
              <button className="regular-14">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
