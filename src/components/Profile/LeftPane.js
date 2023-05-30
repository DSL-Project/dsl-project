import React, { useState } from 'react';
import { useGlobalContext } from '../../appContext';
import defaultImg from '../../assets/defaultImg.jpg';

const LeftPane = ({
    profileData,
    slugFromLocation,
    memberTypeFromLocation,
}) => {
    const [readMore, setReadMore] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const { tabletView, mobileView } = useGlobalContext();

    const { name, titles, tags, img } = profileData?.[0] || {
        name: '',
        titles: [''],
        tags: [''],
        img: {},
    };
    const personImg = img?.fields?.file?.url || defaultImg;
    const bio = profileData[0]?.profile?.content || null;
    return (
        <div className='profile'>
            <div className='header'>
                <div className='person-image-container'>
                    <div className='person-image'>
                        <img
                            src={personImg}
                            alt={`${name} looking at the camera`}
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
                                if (id < titles.length - 1) {
                                    return (
                                        <h2
                                            key={id}
                                            className='semi-14 subtitles'
                                        >
                                            {title}
                                        </h2>
                                    );
                                } else {
                                    return (
                                        <h2
                                            key={id}
                                            className='semi-14 subtitles'
                                        >
                                            {title}
                                        </h2>
                                    );
                                }
                            })}
                        </div>
                    )}
                </div>
                {/* ------------------------------------------------------- */}
                {/* TAGS */}
                {/* make sure tags are not retrurning undefined */}
                {tags !== undefined ? (
                    mobileView ? (
                        // if its a mobile view, then check if length is > 5
                        tags.length > 5 ? (
                            // if length > 5 then show a button
                            <div>
                                {showAll ? (
                                    <ul className='tags-container'>
                                        {tags.slice(0, 5).map((tag, id) => (
                                            <li
                                                key={id}
                                                className='semi-14 tags'
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className='tags-container'>
                                        {tags.slice(0).map((tag, id) => (
                                            <li
                                                key={id}
                                                className='semi-14 tags'
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <button
                                    className='read-btn show-btn'
                                    onClick={() => setShowAll(!showAll)}
                                >
                                    <p className='regular-16'>
                                        {showAll ? 'show all' : 'show less'}
                                    </p>

                                    {/* if button is true, then show all tags */}
                                </button>
                            </div>
                        ) : (
                            // if length is not > 5, then render all
                            <ul className='tags-container'>
                                {tags.map((tag, id) => {
                                    return (
                                        <li key={id} className='semi-14 tags'>
                                            {/* {tag} */}
                                        </li>
                                    );
                                })}
                            </ul>
                        )
                    ) : (
                        // handle if its not mobile view
                        <ul className='tags-container'>
                            {tags.map((tag, id) => {
                                return (
                                    <li key={id} className='semi-14 tags'>
                                        {tag}
                                    </li>
                                );
                            })}
                        </ul>
                    )
                ) : null}
                {/* ---------------------------------------------- */}
                {/* BIO */}

                {/* if tabletView is true, then render only 1 paragraph with option to read-more
                    if tablet view is true and readmore is also true then render only 1 paragraph and to read more, other wise option to read less
                    if tabletView is false, then render all paragraphs with option  */}
                <div className='bio'>
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
