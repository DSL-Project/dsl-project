import React from 'react';
import { useGlobalContext } from '../../appContext';
import { navConstants, STATIC_QUERY } from '../../appConstants';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { setQuery } = useGlobalContext();
    return (
        <div className='header'>
            <div className='logo'>
                <NavLink to='/' onClick={() => setQuery(STATIC_QUERY)}>
                    Digital Society Lab
                </NavLink>
            </div>
            <nav className='nav-bar'>
                <ul>
                    {navConstants.map((nav) => {
                        const { id, name, url, queryString } = nav;
                        return (
                            <li key={id}>
                                <NavLink
                                    to={url}
                                    onClick={() => setQuery(queryString)}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
