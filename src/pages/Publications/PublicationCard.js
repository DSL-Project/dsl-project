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
                    {/* rendering journal */}
                    <div className='publication'>
                        <div className='meta-container'>
                            <div className='meta'>
                                {/* publication type */}
                                <a
                                    href={url}
                                    className={`${
                                        publicationType === 'journal article'
                                            ? 'publication-type journal bold-caps'
                                            : 'publication-type popular bold-caps'
                                    }`}
                                >
                                    {publicationType}
                                </a>
                                {/* link icon */}
                                <a
                                    href={url}
                                    className='top-link'
                                    title='Permalink'
                                >
                                    <LinkIcon />
                                </a>
                            </div>

                            {/* journal heading */}
                            <div className='heading '>
                                <h3 className='semi-18'>
                                    {title}
                                    {/* if url for article is present only then render */}
                                    {url && (
                                        <a
                                            href={url}
                                            className='heading-url regular-caps'
                                        >
                                            <p className='regular-caps'>Link</p>
                                            <ExternalLink />
                                        </a>
                                    )}
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* authors.fields.name */}
                    {/* rendering authors */}
                    <div className='authors-container'>
                        <div className='authors'>
                            <h4 className='regular-16 auth-heading'>
                                lab author
                            </h4>
                            {authors && (
                                <ul className='authors-list'>
                                    {/* if length of author is > 1, then each array item concat with comma */}
                                    {/* any change we make in author array in if statement, might need to be made in else part as well                                                                                                                                                                    */}
                                    {authors.length > 1
                                        ? authors.map((author, id) => {
                                              const { slug } = author.fields;
                                              return (
                                                  <li
                                                      key={slug}
                                                      className='author medium-16'
                                                  >
                                                      <Link
                                                          to={`/people/staff/${slug}`}
                                                          className='author-link'
                                                      >
                                                          {author +
                                                              (id ? ' ' : ', ')}
                                                      </Link>
                                                  </li>
                                              );
                                          })
                                        : // if length of author is less than equal to 1, then do not concat with comma
                                          authors.map((author) => {
                                              const { name, slug } =
                                                  author.fields;
                                              return (
                                                  <li
                                                      key={slug}
                                                      className='author medium-16'
                                                  >
                                                      <Link
                                                          to={`/people/staff/${slug}`}
                                                          className='medium-16 author-link'
                                                      >
                                                          {name}
                                                      </Link>
                                                  </li>
                                              );
                                          })}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* rendering featured projects */}

                    <div className='featured-projects-container'>
                        {projects && (
                            <div className='featured-projects'>
                                <h4 className='regular-16 featured-projects-heading'>
                                    featured projects
                                </h4>

                                {/* projects list */}
                                <ol className='project-list'>
                                    {projects.map((project) => {
                                        const { slug, subtitle, url, title } =
                                            project.fields;

                                        return (
                                            <li
                                                key={slug}
                                                className='project medium-16'
                                            >
                                                <a
                                                    href={url}
                                                    className='project-link'
                                                    title={title}
                                                >
                                                    {`${title}: ${subtitle.substring(
                                                        0,
                                                        74
                                                    )}... `}
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
