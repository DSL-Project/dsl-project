import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectDetailsNav = ({ projectCardInfo, data }) => {
    return (
        <nav className='pdnav-container'>
            <div className='pd-nav'>
                <div className='pd-path'>
                    <NavLink className='regular-16 pathItem1 pd-link'>
                        {data.split('/')[1]}
                    </NavLink>
                    <span className='regular-16 pathItem2 pd-link'>/</span>
                    <NavLink className='regular-16 pathItem3 pd-link '>
                        {data.split('/')[2]}
                    </NavLink>
                </div>
                <ul className='pd-main-menu'>
                    <li className='pd-menu-item'>
                        {/* <NavLink className='regular-14 pd-link'> */}
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'regular-14 pd-link pd-active'
                                    : 'regular-14 pd-link pd-inactive'
                            }
                        >
                            Description
                        </NavLink>
                    </li>
                    <li className='pd-menu-item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'regular-14 pd-link pd-active'
                                    : 'regular-14 pd-link pd-inactive'
                            }
                        >
                            Publication
                        </NavLink>
                    </li>
                    <li className='pd-menu-item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'regular-14 pd-link pd-active'
                                    : 'regular-14 pd-link pd-inactive'
                            }
                        >
                            Media
                        </NavLink>
                    </li>
                    <li className='pd-menu-item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'regular-14 pd-link pd-active'
                                    : 'regular-14 pd-link pd-inactive'
                            }
                        >
                            Partners
                        </NavLink>
                    </li>
                    <li className='pd-menu-item'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'regular-14 pd-link pd-active'
                                    : 'regular-14 pd-link pd-inactive'
                            }
                        >
                            Funding
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ProjectDetailsNav;
