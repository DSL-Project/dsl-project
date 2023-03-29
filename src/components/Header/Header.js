import React from 'react';
import { useGlobalContext } from '../../appContext';
import { navConstants } from '../../appConstants';
import { NavLink } from 'react-router-dom';
import { CgMenu as HamburgerIcon } from 'react-icons/cg';
import Sidebar from './Sidebar';
import Logo from './Logo';

const Header = () => {
    const { setQuery, setOpenMenu } = useGlobalContext();
    return (
        // body
        <nav className='header-container'>
            <header className='header'>
                {/* LOGO */}
                <Logo />

                {/* main NAVBAR */}
                <section className='main-menu'>
                    <ul className='mm-list'>
                        {navConstants.map((nav) => {
                            const { id, name, url, queryString } = nav;
                            return (
                                <li className='mm-list-item' key={id}>
                                    <NavLink
                                        to={url}
                                        onClick={() => setQuery(queryString)}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'item active regular-caps'
                                                : 'item inactive regular-caps'
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    {/* HAMBURGER button */}
                    <button
                        className='ham-btn'
                        onClick={() => setOpenMenu(true)}
                    >
                        <HamburgerIcon className='hamburgerIcon' />
                    </button>

                    {/* SIDEBAR menu */}
                    <Sidebar />
                    {/* <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} /> */}
                </section>
            </header>
        </nav>
    );
};

export default Header;
