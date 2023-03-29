import React from 'react';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { navConstants } from '../../appConstants';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../appContext';
import Logo from './Logo';

const Sidebar = ({ openMenu, setOpenMenu }) => {
    const { setQuery } = useGlobalContext();

    return (
        // <aside className='side-menu'>

        <aside className={`${openMenu ? 'sidebar show-sidebar' : 'sidebar'}`}>
            {/* sidebar header */}
            <section className='sidebar-header'>
                <Logo />
                <button
                    className='close-btn'
                    onClick={() => setOpenMenu(false)}
                >
                    <CloseIcon className='close-icon' />
                </button>
            </section>

            {/* SIDE MENU */}
            <ul className='sm-list'>
                {navConstants.map((nav) => {
                    const { id, name, url, queryString } = nav;
                    return (
                        <li className='sm-list-item' key={id}>
                            <NavLink
                                to={url}
                                onClick={() => {
                                    setQuery(queryString);
                                    setOpenMenu(false);
                                }}
                                // className='regular-caps'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'regular-16 sm-item sm-active'
                                        : 'regular-16 sm-item sm-inactive'
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    );
                })}
                {/* sidebar footer */}
                <div className='sidebar-footer'>
                    <p className='regular-caps footer-text'>
                        &copy; Digital Society Lab,
                        <span>
                            {new Date().getFullYear()}. McMaster University
                        </span>
                    </p>
                </div>
            </ul>
        </aside>
    );
};

export default Sidebar;
