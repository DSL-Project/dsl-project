import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useGlobalContext } from '../../appContext';
import { Link } from 'react-router-dom';

const ProjectsCarousel = () => {
    const { projectsData } = useGlobalContext();

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
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
        <div id='projectsCarousel'>
            <div className='heading-container'>
                <h1>Projects</h1>
                <Link className='seeAll-link' to='/projects'>
                    <h3 className='seeAll-text'>See All</h3>
                    <AiOutlineArrowRight className='svg-arrow right-arrow' />
                </Link>
            </div>

            <Slider {...settings}>
                {projectsData.map((project, id) => {
                    const { slug, title, subtitle, about, tags } = project;

                    return (
                        <div key={id} className='project-container'>
                            <div className='project-subcontainer'>
                                <h2 className='medium-16 project-title'>
                                    {title}
                                </h2>

                                <div className='subtitle'>
                                    <h3 className='carousel-heading'>
                                        {subtitle}
                                    </h3>
                                    <Link to={`/projects/${slug}`}>
                                        <AiOutlineArrowRight className='svg-arrow arrow-right' />
                                    </Link>
                                </div>
                                {about &&
                                    about.content &&
                                    about.content.length > 0 && (
                                        <p className='medium-16 project-description'>
                                            {about.content[0].content[0].value}
                                        </p>
                                    )}
                                <div className='tag-container semi-14'>
                                    <div className='hash-box'>#</div>
                                    {tags &&
                                        tags.map((tag, index) => (
                                            <p
                                                className='tag-box regular-caps'
                                                key={index}
                                            >
                                                {tag}
                                            </p>
                                        ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};
export default ProjectsCarousel;
