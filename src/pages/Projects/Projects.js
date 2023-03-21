import React from 'react';
import Banner from '../../components/Banner/Banner';
import { projects } from '../../assets/testData';
import { useGlobalContext } from '../../appContext';

const Projects = () => {
    const { response, bannerContent } = useGlobalContext();
    const { projectsBody, projectsTitle } = bannerContent[0];

    return (
        <main className='projects-main'>
            {/* banner */}
            <Banner title={projectsTitle} info={projectsBody} />

            {/* rendering projects */}
            <article className='projects-list-container'>
                <article className='projects-list wrapper'>
                    {projects.map((project, id) => {
                        const {
                            title,
                            subtitle,
                            about,
                            url,
                            status,
                            date,
                            tags,
                        } = project;

                        return (
                            <a
                                className='project-link'
                                href={url}
                                key={id}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <article className='project-card'>
                                    <h2 className='project-card-heading'>
                                        {title}
                                    </h2>
                                    <h3 className='project-card-subheading'>
                                        {subtitle}
                                    </h3>
                                    <p className='project-card-intro'>
                                        {about}
                                    </p>
                                    <div className='project-card-metadata'>
                                        <div className='status'>
                                            <div className='current-status'>
                                                {/* active-complete pargraph */}
                                                <p className='status-label'>{`${
                                                    status === 'complete'
                                                        ? 'complete'
                                                        : 'active'
                                                }`}</p>

                                                {/* rendering svg */}
                                                <div className='status-icon'>
                                                    {/* insert dynamic svgs here */}
                                                    {status !== 'complete' ? (
                                                        <div className='flashing'>
                                                            <div
                                                                className='snippet'
                                                                data-title='dot-flashing'
                                                            >
                                                                <div className='stage'>
                                                                    <div className='dot-flashing'></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className='singleDot'></div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* rendering date */}
                                            <div className='timeline'>
                                                {date}
                                            </div>
                                        </div>

                                        {/* rendering tags */}
                                        <ul className='categories'>
                                            <li>#</li>
                                            {tags.map((tag, id) => {
                                                return (
                                                    <li
                                                        className='category'
                                                        key={id}
                                                    >
                                                        {tag}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </article>
                            </a>
                        );
                    })}
                </article>
            </article>
        </main>
    );
};

export default Projects;
