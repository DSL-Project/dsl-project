import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useGlobalContext } from '../../appContext';
import { Link } from 'react-router-dom';

const Projects = () => {
    const { response, projectsBody, projectsTitle } = useGlobalContext();
    console.log('response for PROJECTS page: ', response);
    return (
        <main className='projects-main'>
            {/* banner */}
            <Banner title={projectsTitle} info={projectsBody} />

            {/* rendering projects */}
            <article className='projects-list-container'>
                <article className='projects-list wrapper'>
                    {response.map((project, id) => {
                        // about is array/object, tags is arrays
                        const {
                            title,
                            subtitle,
                            slug,
                            about,
                            url,
                            status,
                            endDate: date,
                            tags,
                        } = project;

                        return (
                            <Link className='project-link' to={url} key={id}>
                                <article className='project-card'>
                                    <h2 className='project-card-heading'>
                                        {title}
                                    </h2>
                                    <h3 className='project-card-subheading'>
                                        {subtitle}
                                    </h3>

                                    <p className='project-card-intro'>
                                        {about?.content[0]?.content[0]?.value ||
                                            'finding data.... '}
                                    </p>

                                    <div className='project-card-metadata'>
                                        <div className='status'>
                                            <div className='current-status'>
                                                {/* active button looking paragraph*/}
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
                                            {date !== undefined && (
                                                <div className='timeline'>
                                                    {date.substring(0, 4)}
                                                </div>
                                            )}
                                        </div>
                                        {/* rendering tags */}
                                        {tags && (
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
                                        )}
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </article>
            </article>
        </main>
    );
};

export default Projects;
