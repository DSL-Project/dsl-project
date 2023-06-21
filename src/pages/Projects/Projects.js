import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import { useGlobalContext } from '../../appContext';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../../appConstants';
import LoadingState from '../../components/LoadingState/LoadingState';

const Projects = () => {
    const { response, projectsBody, projectsTitle, setQuery, isLoading } = useGlobalContext();


		const sortedResponses = response?.sort((a, b) => {
			let aOrder = a.hasOwnProperty("sortOrder") ? a.sortOrder : 100001;
			let bOrder = b.hasOwnProperty("sortOrder") ? b.sortOrder : 100001;

			return aOrder - bOrder;
		});

		

    // refresh button functionality
    useEffect(() => {
        window.addEventListener('beforeunload', setQuery(PROJECTS));
        return () => {
            window.removeEventListener('beforeunload', setQuery(PROJECTS));
        };
    }, [setQuery]);

    if (isLoading) {
        return <LoadingState />;
    }
    if (response === undefined) {
        return null;
    }

    return (
			<main className="projects-main">
				{/* banner */}
				<Banner title={projectsTitle} info={projectsBody} />

				{/* rendering project cards */}
				<article className="projects-list-container">
					<article className="projects-list wrapper">
						{sortedResponses.map((project, id) => {
							return <ProjectCard key={id} projectCardInfo={project} />;
						})}
					</article>
				</article>
			</main>
		);
};

export default Projects;
