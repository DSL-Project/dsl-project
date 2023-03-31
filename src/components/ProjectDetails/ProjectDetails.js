import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetailsNav from './ProjectDetailsNav';
import ProjectDetailsLeft from './ProjectDetailsLeft';
import ProjectDetailsRight from './ProjectDetailsRight';

const ProjectDetails = () => {
    const { pathname, state: projectCardInfo } = useLocation();
    const navLinks = [
        { id: 1, name: 'publications', url: '/publications' },
        { id: 2, name: 'description', url: '/' },
        { id: 3, name: 'partners', url: '/' },
        { id: 4, name: 'funding', url: '/' },
        { id: 5, name: 'media', url: '/' },
    ];

    const RightPaneData = { projectCardInfo, navLinks };
    const NavData = { pathname, navLinks };

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
