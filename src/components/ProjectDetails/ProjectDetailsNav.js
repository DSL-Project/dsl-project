import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const ProjectDetailsNav = ({ pathname, navLinks, projectCardInfo }) => {
    return (
        <nav className='pdnav-container'>
            <div className='pd-nav'>
                <div className='pd-path'>
                    <NavLink
                        className='regular-16 pathItem1 pd-link'
                        to={'/projects'}
                    >
                        {pathname.split('/')[1]}
                    </NavLink>
                    <span className='regular-16 pathItem2 pd-link'>/</span>
                    <span className='regular-16 pathItem3 pd-link '>
                        {pathname.split('/')[2]}
                    </span>
                </div>
                <ul className='pd-main-menu'>
                    {navLinks.map((link) => {
                        return (
                            <li key={link.id} className='pd-menu-item'>
                                <NavHashLink
                                    smooth
                                    to={link.url}
                                    state={projectCardInfo}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'regular-14 pd-link pd-active'
                                            : 'regular-14 pd-link pd-inactive'
                                    }
                                >
                                    {link.name}
                                </NavHashLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default ProjectDetailsNav;
