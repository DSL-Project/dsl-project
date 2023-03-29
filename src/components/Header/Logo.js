import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../appContext';
import { STATIC_QUERY } from '../../appConstants';

const Logo = () => {
    const { setQuery, setOpenMenu } = useGlobalContext();
    return (
        <section className='logo'>
            {/* LOGO */}
            <NavLink
                to='/'
                onClick={() => {
                    setQuery(STATIC_QUERY);
                    setOpenMenu(false);
                }}
                className='home-logo bold-18'
            >
                Digital Society Lab
            </NavLink>
        </section>
    );
};

export default Logo;
