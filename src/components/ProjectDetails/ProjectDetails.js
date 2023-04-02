import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetailsNav from './ProjectDetailsNav';
import ProjectDetailsLeft from './ProjectDetailsLeft';
import ProjectDetailsRight from './ProjectDetailsRight';

const ProjectDetails = () => {
    const { pathname, state: projectCardInfo } = useLocation();
    const { slug } = projectCardInfo;
    const navLinks = [
        { id: 1, name: 'publications', url: `/projects/${slug}#publications` },
        { id: 2, name: 'partners', url: `/projects/${slug}#partners` },
        { id: 3, name: 'funding', url: `/projects/${slug}#fundings` },
        { id: 4, name: 'media', url: `/projects/${slug}#media` },
    ];

    const RightPaneData = { projectCardInfo, navLinks };
    const NavData = { pathname, navLinks, projectCardInfo };
    return (
        <main className='pd-main'>
            {/* navigation */}
            <ProjectDetailsNav {...NavData} />
            {/* left pane */}
            <section className='project-details'>
                <section className='pd-leftpane'>
                    <ProjectDetailsLeft {...projectCardInfo} />
                </section>

                {/* right pane */}
                <section className='pd-rightpane'>
                    <ProjectDetailsRight {...RightPaneData} />
                </section>
            </section>
        </main>
    );
};

export default ProjectDetails;
