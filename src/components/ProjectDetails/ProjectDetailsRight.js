import React from 'react';
import { TbExternalLink as ExternalLink } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ProjectDetailsRight = ({ projectCardInfo, navLinks }) => {
    const { status, endDate: date, url } = projectCardInfo;

    return (
        <aside className='right-pane'>
            {/* associated projects to this person */}
            <div className='top-container'>
                <div className='status-container'>
                    <div className='status-subcontainer'>
                        <p className='bold-16 status'>{status}</p>
                        {date !== undefined && (
                            <p className='medium-16 year'>
                                {date.substring(0, 4)}-present
                            </p>
                        )}
                    </div>

                    <NavLink
                        className='medium-14 site-btn'
                        to={url}
                        target='_blank'
                        state={projectCardInfo}
                    >
                        visit the site
                        <span className='site-icon'>
                            <ExternalLink />
                        </span>
                    </NavLink>
                </div>
            </div>
            <div className='underline' />

            <div className='bottom-container'>
                <ul className='pd-nav'>
                    {navLinks.map((link) => {
                        return (
                            <HashLink
                                key={link.id}
                                smooth
                                to={link.url}
                                className='semi-14 pd-nav-item'
                                state={projectCardInfo}
                            >
                                {link.name}
                            </HashLink>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default ProjectDetailsRight;
