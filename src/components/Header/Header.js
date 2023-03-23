import React from 'react';
import { useGlobalContext } from '../../appContext';
import { navConstants, STATIC_QUERY } from '../../appConstants';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { setQuery } = useGlobalContext();
    return (
        // body
        <section className='header-container'>
            <header className='header'>
                {/* logo */}

                <NavLink
                    to='/'
                    onClick={() => setQuery(STATIC_QUERY)}
                    className='home-logo bold-18'
                >
                    Digital Society Lab
                </NavLink>

                {/* navbar */}
                <nav className='main-menu'>
                    <ul>
                        {navConstants.map((nav) => {
                            const { id, name, url, queryString } = nav;
                            return (
                                <li key={id}>
                                    <NavLink
                                        to={url}
                                        onClick={() => setQuery(queryString)}
                                        // className='regular-caps'
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'active regular-caps'
                                                : 'inactive regular-caps'
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        </section>
    );
};

export default Header;
