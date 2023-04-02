import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import { useGlobalContext } from '../../appContext';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../../appConstants';

const Projects = () => {
    const { response, projectsBody, projectsTitle, setQuery } =
        useGlobalContext();

    useEffect(() => {
        window.addEventListener('beforeunload', setQuery(PROJECTS));
        return () => {
            window.removeEventListener('beforeunload', setQuery(PROJECTS));
        };
    }, [setQuery]);

    return (
        <main className='projects-main'>
            {/* banner */}
            <Banner title={projectsTitle} info={projectsBody} />

            {/* rendering project cards */}
            <article className='projects-list-container'>
                <article className='projects-list wrapper'>
                    {response.map((project, id) => {
                        return (
                            <ProjectCard key={id} projectCardInfo={project} />
                        );
                    })}
                </article>
            </article>
        </main>
    );
};

export default Projects;
