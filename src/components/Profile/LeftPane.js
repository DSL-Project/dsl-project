import React, { useState } from 'react';
import { useGlobalContext } from '../../appContext';

const LeftPane = ({ name, titles, tags, bio, personImg }) => {
    const [readMore, setReadMore] = useState(true);
    const { tabletView } = useGlobalContext();
    return (
        <div className='profile'>
            <div className='header'>
                <div className='person-image-container'>
                    <div className='person-image'>
                        <img
                            src={personImg}
                            alt={`${name} look at the camera`}
                        />
                    </div>
                </div>
            </div>
            <div className='body'>
                {/* main body */}
                <div className='body-content'>
                    <h1 className='name'>{name}</h1>
                    {titles !== undefined && (
                        <div className='subtitles-container'>
                            {titles.map((title, id) => {
                                return (
                                    <h2 key={id} className='semi-14 subtitles'>
                                        {(id ? ',  ' : '') + title}
                                    </h2>
                                );
                            })}
                        </div>
                    )}
                </div>
                {tags !== undefined && (
                    <ul className='tags-container'>
                        {tags.map((tag, id) => {
                            return (
                                <li key={id} className='semi-14 tags'>
                                    {tag}
                                </li>
                            );
                        })}
                    </ul>
                )}
                <div className='bio'>
                    {/* if tabletView is true, then render only 1 paragraph with option to read-more
                    if tablet view is true and readmore is also true then render only 1 paragraph and to read more, other wise option to read less
                    if tabletView is false, then render all paragraphs with option  */}
                    {bio !== null && tabletView
                        ? bio.slice(0, 1).map((para, id) => {
                              const paragraph =
                                  para?.content[0]?.value || 'NODATA';
                              return (
                                  <div key={id}>
                                      <p className='regular-16 paragraphs'>
                                          {paragraph}
                                      </p>

                                      {!readMore &&
                                          bio.slice(1).map((para, id) => {
                                              const paragraph =
                                                  para?.content[0]?.value;
                                              return (
                                                  <p
                                                      key={id}
                                                      className='regular-16 paragraphs'
                                                  >
                                                      {paragraph}
                                                  </p>
                                              );
                                          })}

                                      <button
                                          className='read-btn'
                                          onClick={() => setReadMore(!readMore)}
                                      >
                                          <p className='regular-16'>
                                              {readMore && bio.length > 1
                                                  ? 'read more'
                                                  : bio.length === 1
                                                  ? ''
                                                  : 'read less'}
                                          </p>
                                      </button>
                                  </div>
                              );
                          })
                        : // if user is not in tablet view then render all the paragraphs
                          bio !== null &&
                          bio.map((para, id) => {
                              const paragraph = para?.content[0]?.value;

                              return (
                                  <p key={id} className='regular-16 paragraphs'>
                                      {paragraph}
                                  </p>
                              );
                          })}
                </div>
            </div>
        </div>
    );
};

export default LeftPane;
