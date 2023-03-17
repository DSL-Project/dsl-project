import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';
import { persons } from '../../assets/testData';

const Person = () => {
    const { pathname } = useLocation();
    const pathItem = pathname.split('/');
    // static data will  be deleted after parsing from api

    const {
        name,
        titles,
        img,
        website,
        email,
        tags,
        GlobeLogo,
        MailLogo,
        profile,
        projects,
        publications,
    } = persons;
    return (
        <section className='person-page'>
            <Header />
            {/*--- person's nav --*/}
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
                        {website && (
                            <li className='item'>
                                <GlobeLogo />
                                <Link
                                    to={{ pathname: website.siteUrl }}
                                    target='_blank'
                                >
                                    personal website
                                </Link>
                            </li>
                        )}
                        {email && (
                            <li className='item'>
                                <MailLogo />
                                <a className='email' href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* ----main page------- */}
            <section className='person-profile'>
                {/* left pane of scroll bar */}
                <div className='profile'>
                    <div className='header'>
                        <div className='content person-wrapper'>
                            <div className='person-image'>
                                <img
                                    src={img}
                                    alt={`${name} look at the camera`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='body person-wrapper-body person-wrapper '>
                        {/* main body */}
                        <div className='body-content'>
                            <h1 className='name'>{name}</h1>
                            <div className='titles'>
                                {titles.map((title, id) => {
                                    return <h3 key={id}>{title}</h3>;
                                })}
                            </div>
                        </div>
                        <ul className='tags'>
                            {tags.map((tag, id) => {
                                return <li key={id}>{tag}</li>;
                            })}
                        </ul>
                        <div className='bio'>
                            {profile.map((para, id) => {
                                return <p key={id}>{para}</p>;
                            })}
                        </div>
                    </div>
                </div>

                {/* right pane of scroll bar */}
                <div className='link-list'>
                    {/* associated projects to this person */}
                    <div className='projects-container content'>
                        <h3>affiliated projects</h3>
                        <ul className='project-list'>
                            {projects.map((project, id) => {
                                const { url, subtitle } = project;
                                return (
                                    <li key={id}>
                                        <a
                                            href={url}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            {subtitle}{' '}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='underline' />

                    {/* publications of this person */}
                    <div className='publications-container content'>
                        <h3>publications </h3>
                        <ul className='publication-list'>
                            {publications.map((article, id) => {
                                const { title, date } = article;
                                return (
                                    <li key={id}>
                                        <div className='publication-container'>
                                            <p>{title}</p>
                                        </div>

                                        <div className='date-container'>
                                            <p>published</p>
                                            <time dateTime={date}>{date}</time>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    );
};

export default Person;
