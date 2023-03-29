import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
    const { pathname, state: projectData } = useLocation();
    const { title, subtitle, about, tags, team, media, url } = projectData;

    console.log('project data: ', projectData);
    const aboutArray =
        about?.content?.filter((item) => {
            return item?.content;
        }) || null;
    console.log('SUM: ', aboutArray);

    // console.log('PROJECT DATA: ', projectData);
    return <div>ProjectDetails</div>;
};

export default ProjectDetails;
