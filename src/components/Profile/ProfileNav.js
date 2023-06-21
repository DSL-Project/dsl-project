import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ProfileNav = ({ pathname, profileData }) => {
    const pathItem = pathname.split('/');
    const {  name } = profileData[0] || {
        name: '',
    };

    return (
        <section className='nav-container'>
            {/*--- person's nav --*/}
            <div className='person-nav'>
                {/* path name */}
                <div className='navigation'>
                    <span>
                        <Link
                            to={`/${pathItem[1]}`}
                            className='medium-14 path-children'
                        >
                            {pathItem[1]}
                        </Link>
                        <span className='medium-14 path-children'>/</span>
                        <Link
                            to={`/${pathItem[1]}#${pathItem[2]}`}
                            className='medium-14 path-children'
                        >
                            {pathItem[2]}
                        </Link>
                        <span className='medium-14 path-children'>/</span>
                        <span className='medium-14 path-children'>{name}</span>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProfileNav;
