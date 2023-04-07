import React from 'react';
import { TbExternalLink as ExternalLink } from 'react-icons/tb';
import { HashLink } from 'react-router-hash-link';

const ProjectDetailsRight = ({ projectCardInfo, navLinks }) => {
    const { status, startDate: date, url } = projectCardInfo;

    return (
        <aside className='right-pane'>
            {/* associated projects to this person */}
            <div className='top-container'>
                <div className='status-container'>
                    <div className='status-subcontainer'>
                        {/* <p className='bold-16 status'>{status}</p> */}
                        <p className='bold-16 status'>
                            {status === undefined ? 'Active' : status}
                        </p>

                        {date !== undefined && (
                            <p className='medium-16 year'>
                                {date.substring(0, 4)}-present
                            </p>
                        )}
                    </div>

                    {url !== undefined && (
                        <a
                            className='medium-14 site-btn'
                            href={url}
                            target='_blank'
                            rel='noreferrer'
                        >
                            visit the site
                            <span className='site-icon'>
                                <ExternalLink />
                            </span>
                        </a>
                    )}
                </div>
            </div>
            <div className='underline' />

            <div className='bottom-container'>
                <ul className='pd-nav'>
                    {navLinks.map((link, id) => {
                        return (
                            <HashLink
                                key={id}
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
