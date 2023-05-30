import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useGlobalContext } from "../../appContext";
import { Link } from "react-router-dom";

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
					<a href="/projects">
						See All
						<AiOutlineArrowRight />
					</a>
				</div>
			</div>
			<Slider {...settings}>
				{projectsData.map((project, id) => {
					const { slug, title, subtitle, about } = project;

					return (
						<Link to={`/projects/${slug}`}>
							<div key={id} className="project-container">
								<div className="title-container">
									<h2 className="medium-16 project-title">{title}</h2>
								</div>
								<div className="subtitle">
									<h3>{subtitle}</h3>
								</div>
								{about && about.content && about.content.length > 0 && (
									<p className="medium-16 project-description">
										{about.content[0].content[0].value}
									</p>
								)}
							</div>
						</Link>
					);
				})}
			</Slider>
		</div>
	);
};
export default ProjectsCarousel;
