import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useGlobalContext } from "../../appContext";

const ProjectsCarousel = () => {
  const { projectsData } = useGlobalContext();

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
          slidesToShow: 1,
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
        {projectsData.map(({ slug, title, subtitle, url, about, tags }) => (
          <div className="project-container" key={slug}>
            <div className="title-container">
              <h2 className="medium-16 project-title">{title}</h2>
            </div>
            <div className="subtitle">
              <h3>{subtitle}</h3>
              <a href={url}>
                <AiOutlineArrowRight />
              </a>
            </div>
            {about && about.content && about.content.length > 0 && (
              <p className="medium-16 project-description">
                {about.content[0].value}
              </p>
            )}
            <div className="tag-container semi-14">
              {tags &&
                tags.map((tag, index) => (
                  <div className="tag-box" key={index}>
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ProjectsCarousel;
