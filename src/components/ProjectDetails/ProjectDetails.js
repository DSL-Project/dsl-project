import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetailsNav from './ProjectDetailsNav';
import ProjectDetailsLeft from './ProjectDetailsLeft';
import ProjectDetailsRight from './ProjectDetailsRight';

const ProjectDetails = () => {
    const { pathname, state: projectCardInfo } = useLocation();
    const {
        title,
        subtitle,
        about,
        tags,
        team,
        media,
        url,
        publications,
        status,
        startDate,
    } = projectCardInfo;

    const NavData = pathname;
    const RightPaneData = { url, status, startDate };
    const LeftPaneData = {
        title,
        subtitle,
        about,
        tags,
        team,
        publications,
        media,
    };

    return (
        <main className='pd-main'>
            {/* navigation */}
            <ProjectDetailsNav
                data={NavData}
                projectCardInfo={projectCardInfo}
            />
            {/* left pane */}
            <section className='project-details'>
                <section className='pd-leftpane'>
                    <ProjectDetailsLeft
                        className='pd-left'
                        data={LeftPaneData}
                        projectCardInfo={projectCardInfo}
                    />
                </section>

                {/* right pane */}
                <section className='pd-rightpane'>
                    <ProjectDetailsRight
                        className='pd-right'
                        data={RightPaneData}
                        projectCardInfo={projectCardInfo}
                    />
                </section>
            </section>
        </main>
    );
};

export default ProjectDetails;
