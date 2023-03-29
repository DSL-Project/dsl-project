import React from 'react';
import { Link } from 'react-router-dom';
import { TbExternalLink as ExternalLink } from 'react-icons/tb';
import { CgLink as LinkIcon } from 'react-icons/cg';

const PublicationCard = ({
    date,
    publicationType,
    title,
    authors,
    projects,
    url,
}) => {
    return (
        <section className='publication-card-list'>
            <ul className='publications'>
                <li className='publications-list-item'>
                    {/* rendering publication  */}
                    <div className='publication'>
                        <div className='meta-container'>
                            {(publicationType !== undefined ||
                                publicationType !== '') && (
                                <div className='meta'>
                                    {/* publication type */}
                                    <a
                                        href={url}
                                        className={`${
                                            publicationType ===
                                            'journal article'
                                                ? 'publication-type journal bold-caps'
                                                : 'publication-type popular bold-caps'
                                        }`}
                                    >
                                        {publicationType}
                                    </a>

                                    {/* perma link */}
                                    <Link
                                        href={url}
                                        className='top-link'
                                        title='Permalink'
                                        onClick={() =>
                                            console.log('navigate to the page')
                                        }
                                    >
                                        <LinkIcon />
                                    </Link>
                                </div>
                            )}

                            {/* journal heading */}
                            <div className='heading '>
                                <h3 className='semi-18'>
                                    {title}
                                    {/* if url for article is present only then render */}
                                    {url && (
                                        <div className='link-container'>
                                            <a
                                                href={url}
                                                className='heading-url regular-caps'
                                            >
                                                Link
                                                <span className='regular-caps svg-container'>
                                                    <ExternalLink />
                                                </span>
                                            </a>
                                        </div>
                                    )}
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* rendering authors */}
                    {authors !== undefined && authors.length > 0 && (
                        <div className='authors-container'>
                            <div className='authors'>
                                <h4 className='regular-16 auth-heading'>
                                    lab author
                                    <span className='specialS'>
                                        &#40;s&#41;
                                    </span>
                                </h4>
                                {authors && (
                                    <ul className='authors-list'>
                                        {/* if length of author is > 1, then each array item concat with comma */}
                                        {authors.map((author, id) => {
                                            const { slug, name } =
                                                author.fields;

                                            return (
                                                <li
                                                    key={id}
                                                    className='author medium-16'
                                                >
                                                    <Link
                                                        to={`/people/staff/${slug}`}
                                                        className='author-link'
                                                    >
                                                        {/* {name} */}

                                                        {(id ? ',' : '') + name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}

                    {/* rendering featured projects */}

                    <div className='featured-projects-container'>
                        {projects && (
                            <div className='featured-projects'>
                                <h4 className='regular-16 featured-projects-heading'>
                                    featured projects
                                </h4>

                                {/* projects list */}
                                <ol className='project-list'>
                                    {projects.map((project, id) => {
                                        const { subtitle, url, title } =
                                            project.fields;

                                        return (
                                            <li
                                                key={id}
                                                className='project medium-16'
                                            >
                                                <a
                                                    href={url}
                                                    className='project-link'
                                                    title={title}
                                                >
                                                    {`${
                                                        id + 1
                                                    }. ${title}: ${subtitle.substring(
                                                        0,
                                                        40
                                                    )}...`}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default PublicationCard;
