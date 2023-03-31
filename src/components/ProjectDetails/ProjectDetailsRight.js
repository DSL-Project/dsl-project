import React from 'react';
import { TbExternalLink as ExternalLink } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const ProjectDetailsRight = ({ navLinks, projectCardInfo }) => {
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
                            <NavLink
                                key={link.id}
                                to={link.url}
                                className='semi-14 pd-nav-item'
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default ProjectDetailsRight;
