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
        <>
            <ProjectDetailsNav
                data={NavData}
                projectCardInfo={projectCardInfo}
            />
            <ProjectDetailsLeft
                data={LeftPaneData}
                projectCardInfo={projectCardInfo}
            />
            <ProjectDetailsRight
                data={RightPaneData}
                projectCardInfo={projectCardInfo}
            />
        </>
    );
};

export default ProjectDetails;
