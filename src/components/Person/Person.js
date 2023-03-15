import React from 'react';
import { useGlobalContext } from '../../appContext';
import { Link, useLocation } from 'react-router-dom';

import { TbGlobe as GlobeLogo, TbMail as MailLogo } from 'react-icons/tb';

const Person = () => {
    const { author } = useGlobalContext();
    const { name, description, img, about } = author;
    const { mainTags, subTags, email, website } = about;
    const { pathname } = useLocation();
    const pathItem = pathname.split('/');

    return (
        <div className='person-page'>
            {/* person's navigation bar*/}
            <div className='person-nav'>
                {/* path name */}
                <div className='navigation'>
                    <span>
                        <Link to='/' style={{ display: 'inline-block' }}>
                            {pathItem[1]}
                        </Link>
                        <span>/</span>
                        <Link to='/' style={{ display: 'inline-block' }}>
                            {pathItem[2]}
                        </Link>
                        <span>/</span>
                        <span>{name}</span>
                    </span>
                </div>

                {/* links to a contact info */}
                <div className='person-contact'>
                    <ul>
                        {website.siteUrl && (
                            <li className='item'>
                                <GlobeLogo />
                                <Link
                                    to={{ pathname: website.siteUrl }}
                                    target='_blank'
                                >
                                    {website.siteTitle}
                                </Link>
                            </li>
                        )}
                        {website.siteUrl && (
                            <li className='item'>
                                <MailLogo />
                                <a href={`mailto:${email}`}>{email}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className='wrapper'>
                <section className='person-section'>
                    {/* person's image */}
                    <div className='person-img'>
                        <img src={img} alt={`${name} look at the camera`} />
                    </div>

                    {/* person's name */}
                    <h1>{name}</h1>

                    {/* subtags */}
                    <ul className='subTags'>
                        {subTags.map((tag, id) => {
                            return (
                                <li key={id}>
                                    <h6>{tag}</h6>
                                </li>
                            );
                        })}
                    </ul>

                    {/* main tags */}
                    <ul className='mainTags'>
                        {mainTags.map((tag, id) => {
                            return (
                                <li key={id}>
                                    <h6>{tag}</h6>
                                </li>
                            );
                        })}
                    </ul>

                    {/* person's description */}
                    <p className='description'>{description} </p>
                </section>
            </div>
        </div>
    );
};

export default Person;
