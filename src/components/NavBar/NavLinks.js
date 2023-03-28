import React from 'react';

const NavLinks = (props) => {
    return (
        <ul className='regular-caps'>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='https://development-dsl.netlify.app/projects'>
                    PROJECTS
                </a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='https://development-dsl.netlify.app/training'>
                    TRAINING
                </a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='https://development-dsl.netlify.app/publications'>
                    PUBLICATIONS
                </a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='https://development-dsl.netlify.app/people'>PEOPLE</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='https://development-dsl.netlify.app/contact'>
                    CONTACT
                </a>
            </li>
        </ul>
    );
};

export default NavLinks;
