import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";
const ProjectsCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="heading-container">
        <h2>Projects</h2>
        <div className="custom-arrow">
          <a href="/projects">See All</a>
          <AiOutlineArrowRight />
        </div>
      </div>
      <Slider {...settings}>
        <div className="project-container">
          <div className="title-container">
            <h2 className="medium-16 project-title">GeckoSpy</h2>
          </div>
          <div className="subtitle">
            <h3>
              Pegasus Spyware Used against Thailand's Pro-Democracy Movement
            </h3>
            <a href="/project">
              {/* this anchor link should go to the specific project page */}
              <AiOutlineArrowRight />
            </a>
          </div>
          <p className="medium-16 project-description">
            Digital technologies are transforming civil society and democracy.
            Our dependencies on digital systems require new insights into how
            these technologies work and how civil society can engage them
            safely, equitably, purposefully, and in support of human dignity and
            collective action.
          </p>
          <div className="tag-container semi-14">
            <div className="tag-box">#</div>
            <div className="tag-box">Security</div>
            <div className="tag-box">Politics</div>
            <div className="tag-box">Hacking</div>
            <div className="tag-box">Privacy</div>
          </div>
        </div>

        <div className="project-container">
          <div className="title-container">
            <h2 className="medium-16 project-title">Bada Bing, Bada Boom</h2>
          </div>
          <div className="subtitle">
            <h3>
              Microsoft Bing's Chinese Political Censorship of Autosuggestions
              in North America
            </h3>
            <a href="/project">
              {/* this anchor link should go to the specific project page */}
              <AiOutlineArrowRight />
            </a>
          </div>
          <p className="medium-16 project-description">
            Digital technologies are transforming civil society and democracy.
            Our dependencies on digital systems require new insights into how
            these technologies work and how civil society can engage them
            safely, equitably, purposefully, and in support of human dignity and
            collective action.
          </p>
          <div className="tag-container semi-14">
            <div className="tag-box">#</div>
            <div className="tag-box">Security</div>
            <div className="tag-box">Politics</div>
            <div className="tag-box">Hacking</div>
            <div className="tag-box">Privacy</div>
          </div>
        </div>

        <div className="project-container">
          <div className="title-container">
            <h2 className="medium-16 project-title">GeckoSpy</h2>
          </div>
          <div className="subtitle">
            <h3>
              Pegasus Spyware Used against Thailand's Pro-Democracy Movement
            </h3>
            <a href="/project">
              {/* this anchor link should go to the specific project page */}
              <AiOutlineArrowRight />
            </a>
          </div>
          <p className="medium-16 project-description">
            Digital technologies are transforming civil society and democracy.
            Our dependencies on digital systems require new insights into how
            these technologies work and how civil society can engage them
            safely, equitably, purposefully, and in support of human dignity and
            collective action.
          </p>
          <div className="tag-container semi-14">
            <div className="tag-box">#</div>
            <div className="tag-box">Security</div>
            <div className="tag-box">Politics</div>
            <div className="tag-box">Hacking</div>
            <div className="tag-box">Privacy</div>
          </div>
        </div>

        <div className="project-container">
          <div className="title-container">
            <h2 className="medium-16 project-title">Bada Bing, Bada Boom</h2>
          </div>
          <div className="subtitle">
            <h3>
              Microsoft Bing's Chinese Political Censorship of Autosuggestions
              in North America
            </h3>
            <a href="/project">
              {/* this anchor link should go to the specific project page */}
              <AiOutlineArrowRight />
            </a>
          </div>
          <p className="medium-16 project-description">
            Digital technologies are transforming civil society and democracy.
            Our dependencies on digital systems require new insights into how
            these technologies work and how civil society can engage them
            safely, equitably, purposefully, and in support of human dignity and
            collective action.
          </p>
          <div className="tag-container semi-14">
            <div className="tag-box">#</div>
            <div className="tag-box">Security</div>
            <div className="tag-box">Politics</div>
            <div className="tag-box">Hacking</div>
            <div className="tag-box">Privacy</div>
          </div>
        </div>

        <div className="project-container">
          <div className="title-container">
            <h2 className="medium-16 project-title">GeckoSpy</h2>
          </div>
          <div className="subtitle">
            <h3>
              Pegasus Spyware Used against Thailand's Pro-Democracy Movement
            </h3>
            <a href="/project">
              {/* this anchor link should go to the specific project page */}
              <AiOutlineArrowRight />
            </a>
          </div>
          <p className="medium-16 project-description">
            Digital technologies are transforming civil society and democracy.
            Our dependencies on digital systems require new insights into how
            these technologies work and how civil society can engage them
            safely, equitably, purposefully, and in support of human dignity and
            collective action.
          </p>
          <div className="tag-container semi-14">
            <div className="tag-box">#</div>
            <div className="tag-box">Security</div>
            <div className="tag-box">Politics</div>
            <div className="tag-box">Hacking</div>
            <div className="tag-box">Privacy</div>
          </div>
        </div>

        <div className="project-container">
          <div className="title-container">
            <h2 className="medium-16 project-title">Bada Bing, Bada Boom</h2>
          </div>
          <div className="subtitle">
            <h3>
              Microsoft Bing's Chinese Political Censorship of Autosuggestions
              in North America
            </h3>
            <a href="/project">
              {/* this anchor link should go to the specific project page */}
              <AiOutlineArrowRight />
            </a>
          </div>
          <p className="medium-16 project-description">
            Digital technologies are transforming civil society and democracy.
            Our dependencies on digital systems require new insights into how
            these technologies work and how civil society can engage them
            safely, equitably, purposefully, and in support of human dignity and
            collective action.
          </p>
          <div className="tag-container semi-14">
            <div className="tag-box">#</div>
            <div className="tag-box">Security</div>
            <div className="tag-box">Politics</div>
            <div className="tag-box">Hacking</div>
            <div className="tag-box">Privacy</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default ProjectsCarousel;
