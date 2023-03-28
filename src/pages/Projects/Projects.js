import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useGlobalContext } from '../../appContext';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { response, projectsBody, projectsTitle } = useGlobalContext();

    return (
        <main className='projects-main'>
            {/* banner */}
            <Banner title={projectsTitle} info={projectsBody} />

            {/* rendering project cards */}
            <article className='projects-list-container'>
                <article className='projects-list wrapper'>
                    {response.map((project, id) => {
                        return <ProjectCard key={id} {...project} />;
                    })}
                </article>
            </article>
        </main>
    );
};

export default Projects;
