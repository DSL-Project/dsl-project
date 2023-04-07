import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetailsNav from './ProjectDetailsNav';
import ProjectDetailsLeft from './ProjectDetailsLeft';
import ProjectDetailsRight from './ProjectDetailsRight';

const ProjectDetails = () => {
    const { pathname, state: projectCardInfo } = useLocation();
    const { slug } = projectCardInfo;

    const navLinks = [];
    const targetObj = projectCardInfo;
    const filterItems = ['publications', 'media', 'team'];
    const filteredObject = Object.keys(targetObj)
        .filter((key) => filterItems.includes(key))
        .reduce((cur, key) => {
            return Object.assign(cur, {
                url: `/projects/${slug}#${key}`,
                name: key,
            });
        }, {});
    navLinks.push(filteredObject);

    // fundings and partners are static for now. we can tweak it, once we start getting from database.
    navLinks.push(
        { name: 'fundings', url: `/projects/${slug}#fundings` },
        { name: 'partners', url: `/projects/${slug}#partners` }
    );

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
