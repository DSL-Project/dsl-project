import React from 'react';
import { CgGlobeAlt as GlobeLogo, CgMail as MailLogo } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ProfileNav = ({ pathname, website, email, name }) => {
    const pathItem = pathname.split('/');

    return (
        <section className='nav-container'>
            {/*--- person's nav --*/}
            <div className='person-nav'>
                {/* path name */}
                <div className='navigation'>
                    <span>
                        <Link to='/people' className='medium-14 path-children'>
                            {pathItem[1]}
                        </Link>
                        <span className='medium-14 path-children'>/</span>
                        <Link to='/people' className='medium-14 path-children'>
                            {pathItem[2]}
                        </Link>
                        <span className='medium-14 path-children'>/</span>
                        <span className='medium-14 path-children'>{name}</span>
                    </span>
                </div>

                {/* links to a contact info */}
                <div className='person-contact'>
                    <ul>
                        {website && (
                            <li className='item'>
                                <Link
                                    to={website}
                                    target='_blank'
                                    className='links'
                                >
                                    <GlobeLogo className='medium-16 nav-icons' />
                                    <span className='medium-16 links-title'>
                                        personal website
                                    </span>
                                </Link>
                            </li>
                        )}
                        {email && (
                            <li className='item'>
                                <a
                                    className='links email'
                                    href={`mailto:${email}`}
                                >
                                    <MailLogo className='medium-16 nav-icons' />
                                    <span className='medium-16 links-title'>
                                        personal Email
                                    </span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProfileNav;
