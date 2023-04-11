import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetailsNav from './ProjectDetailsNav';
import ProjectDetailsLeft from './ProjectDetailsLeft';
import ProjectDetailsRight from './ProjectDetailsRight';

const ProjectDetails = () => {
    const { pathname, state: projectCardInfo } = useLocation();

    const generateSubNavLinks = (projectCard) => {
        /**This function generates the sub navigation items dynamically.
         *  * important to note that response has no 'partners' and 'fundings' property yet.         *
         */

        const { slug } = projectCard || {
            about: undefined,
            media: undefined,
            slug: undefined,
            tags: undefined,
            team: undefined,
            title: undefined,
        };
        console.log('project: ', projectCard);
        const targetObj = projectCard;
        const filterItems = ['publications', 'media', 'team'];
        const linksArray = filterItems.map((item) => {
            const filteredObject = Object.keys(targetObj)
                .filter((key) => key.includes(item))
                .reduce((cur, key) => {
                    return Object.assign(cur, {
                        name: key,
                        url: `/projects/${slug}#${key}`,
                    });
                }, {});
            return filteredObject;
        });
        // linksArray.push(
        //     { name: 'partners', url: `/projects/${slug}#partners` },
        //     { name: 'fundings', url: `/projects/${slug}#fundings` }
        // );
        return linksArray;
    };
    const subNavLinks = generateSubNavLinks(projectCardInfo).filter(
        (item) => item.name !== undefined
    );

    /* in case status is undefined or user did not provide status information.
     by default as per figma, if user does not provide status info, then its active otherwise whatever the user  provides*/
    const { status } = projectCardInfo;
    const newStatus = status === undefined ? 'active' : status;
    // -----------------------
    const RightPaneData = { projectCardInfo, subNavLinks, newStatus };
    const LeftPaneData = { projectCardInfo, newStatus };
    const NavData = { pathname, subNavLinks, projectCardInfo };
    return (
        <main className='pd-main'>
            {/* navigation */}
            <ProjectDetailsNav {...NavData} />
            {/* left pane */}
            <section className='project-details'>
                <section className='pd-leftpane'>
                    <ProjectDetailsLeft {...LeftPaneData} />
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
