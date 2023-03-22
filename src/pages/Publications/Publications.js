import React from 'react';
import { CgLink as LinkIcon } from 'react-icons/cg';
import { TbExternalLink as ExternalLink } from 'react-icons/tb';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';

const Publications = () => {
    const { response, publicationsBody, publicationsTitle } =
        useGlobalContext();

    return (
        <main className='publication-main'>
            {/* rendering banner */}
            <Banner title={publicationsTitle} info={publicationsBody} />

            <section className='publication-list'>
                <div className='wrapper content'>
                    <div className='content-container'>
                        {response.map((publication, id) => {
                            const {
                                date,
                                publicationType,
                                title,
                                authors,
                                projects,
                                url,
                            } = publication;
                            return (
                                <div key={id}>
                                    {date !== undefined && (
                                        <h2 className='year'>
                                            {date.substring(0, 4)}
                                        </h2>
                                    )}
                                    <ul className='publications'>
                                        <li className='publications-list-item'>
                                            {/* rendering journal */}
                                            <div className='publication'>
                                                <div className='meta'>
                                                    {/* publication type */}
                                                    <a
                                                        href={url}
                                                        className={`${
                                                            publicationType ===
                                                            'journal article'
                                                                ? 'publication-type journal'
                                                                : 'publication-type popular'
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
                                                <div className='heading'>
                                                    <p>
                                                        {title}

                                                        {/* if url for article is present only then render */}
                                                        {url && (
                                                            <a
                                                                href={url}
                                                                className='heading-url'
                                                            >
                                                                Link
                                                                <ExternalLink />
                                                            </a>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* authors.fields.name */}
                                            {/* rendering authors */}
                                            <div className='authors'>
                                                <h4>lab authors</h4>
                                                {authors && (
                                                    <ul className='authors-list'>
                                                        {/* if length of author is > 1, then each array item concat with comma */}
                                                        {/* any change we make in author array in if statement, might need to be made in else part as well                                                                                                                                                                    */}
                                                        {authors.length > 1
                                                            ? authors.map(
                                                                  (
                                                                      author,
                                                                      id
                                                                  ) => {
                                                                      const {
                                                                          slug,
                                                                          website,
                                                                      } =
                                                                          author.fields;
                                                                      return (
                                                                          <li
                                                                              key={
                                                                                  slug
                                                                              }
                                                                          >
                                                                              <Link
                                                                                  to={`/people/staff/${slug}`}
                                                                                  className='author-link'
                                                                              >
                                                                                  {author +
                                                                                      (id
                                                                                          ? ' '
                                                                                          : ', ')}
                                                                              </Link>
                                                                          </li>
                                                                      );
                                                                  }
                                                              )
                                                            : // if length of author is less than equal to 1, then do not concat with comma
                                                              authors.map(
                                                                  (author) => {
                                                                      const {
                                                                          name,
                                                                          slug,
                                                                      } =
                                                                          author.fields;
                                                                      return (
                                                                          <li
                                                                              key={
                                                                                  slug
                                                                              }
                                                                              className='author'
                                                                          >
                                                                              <Link
                                                                                  to={`/people/staff/${slug}`}
                                                                                  className='author-link'
                                                                              >
                                                                                  {
                                                                                      name
                                                                                  }
                                                                              </Link>
                                                                          </li>
                                                                      );
                                                                  }
                                                              )}
                                                    </ul>
                                                )}
                                            </div>

                                            {/* rendering featured projects */}

                                            {projects && (
                                                <div className='featured-projects'>
                                                    <h4 className='featured-projects-title'>
                                                        featured projects
                                                    </h4>

                                                    {/* projects list */}
                                                    <ol className='project-list'>
                                                        {projects.map(
                                                            (project) => {
                                                                const {
                                                                    slug,
                                                                    subtitle,
                                                                    url,
                                                                    title,
                                                                } =
                                                                    project.fields;

                                                                return (
                                                                    <li
                                                                        key={
                                                                            slug
                                                                        }
                                                                        className='project'
                                                                    >
                                                                        <a
                                                                            href={
                                                                                url
                                                                            }
                                                                            className='project-link'
                                                                            title={
                                                                                title
                                                                            }
                                                                        >
                                                                            {`${title}: ${subtitle.substring(
                                                                                0,
                                                                                74
                                                                            )}...`}
                                                                        </a>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ol>
                                                </div>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Publications;
