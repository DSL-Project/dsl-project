import React from 'react';
import TeamMember from './TeamMember';
import { TbExternalLink as ExternalLink } from 'react-icons/tb';

const ProjectDetailsLeft = ({ projectCardInfo, newStatus }) => {
    const {
        title,
        subtitle,
        about,
        tags,
        team,
        publications,
        media,
        url,
        startDate: date,
    } = projectCardInfo;

    const [screenSize, setScreenSize] = React.useState(getCurrentWidth());

    function getCurrentWidth() {
        return window.innerWidth;
    }
    React.useEffect(() => {
        const updateWidth = () => {
            setScreenSize(getCurrentWidth);
        };
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [screenSize]);

    return (
        <section className='pd-left'>
            {/* title and subtitle */}
            <div className='pd-header'>
                <h1 className='pd-title'>{title} </h1>
                <h3 className='pd-subtitle'>{subtitle}</h3>
            </div>

            {/* to be rendered on tablet view */}
            {screenSize < 836 && (
                <div className='top-container'>
                    <div className='status-container'>
                        <div className='status-subcontainer'>
                            <p className='bold-16 status'>{newStatus}</p>
                            <p className='medium-16 year'>
                                {date === undefined
                                    ? null
                                    : date.substring(0, 4) + '-present'}
                            </p>
                        </div>
                        <div
                            className={`${
                                url === undefined ? 'removeMe' : 'btn-container'
                            }`}
                        >
                            {url !== undefined && (
                                <a
                                    className='medium-14 site-btn'
                                    href={url}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    visit the site
                                    <span className='site-icon'>
                                        <ExternalLink />
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* about section */}
            <div className='pd-about'>
                {about !== undefined &&
                    about.content.map((item) => {
                        return item.content.map((nestedItem, id) => {
                            return (
                                <p
                                    key={id}
                                    className='regular-16 pd-about-content'
                                >
                                    {nestedItem.value}
                                </p>
                            );
                        });
                    })}
            </div>

            {/* tags */}
            {tags !== undefined && (
                <ul className=' categories'>
                    <li className='semi-14'>#</li>
                    {tags.map((tag, id) => {
                        return (
                            <li key={id} className='semi-14 category'>
                                {tag}
                            </li>
                        );
                    })}
                </ul>
            )}

            {/* teams */}
            {team !== undefined && (
                <div className='pd-team'>
                    <h2 className='pd-team-heading pd-heading' id='team'>
                        Team
                    </h2>
                    <ul className='contributor  pd-team-container'>
                        {team.map((teamMemberInfo, id) => {
                            return (
                                <TeamMember
                                    key={id}
                                    memberInfo={teamMemberInfo.fields}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}

            {/*1: PUBLICATIONS */}
            {publications !== undefined && (
                <div className='pd-publications .pd-contain' id='publications'>
                    <h2 className='pd-pub-heading pd-heading'>Publications</h2>
                    <div className='publications-container'>
                        {publications.map((pub, id) => {
                            const paragraph = pub?.fields?.title || null;
                            return (
                                <h3 key={id} className='regular-16 pd-content'>
                                    {paragraph}
                                </h3>
                            );
                        })}
                    </div>
                </div>
            )}

            {/*2: MEDIA */}
            {media !== undefined && (
                <div className='pd-media .pd-contain' id='media'>
                    <h2 className='pd-media-heading pd-heading'>media</h2>
                    {media
                        .map((data) => {
                            if (data?.fields === undefined) {
                                return null;
                            }
                            return data.fields.title.content[0].content.map(
                                (nestedData) => {
                                    return nestedData.value;
                                }
                            );
                        })
                        .map((item, id) => (
                            <h3 key={id} className='regular-16 pd-content'>
                                {item}
                            </h3>
                        ))}
                </div>
            )}

            {/*3: Partners */}
            {/* we dont have partners information from response yet */}
            {/* <div className='pd-partners .pd-contain' id='partners'>
                <h2 className='pd-partner-heading pd-heading'>partners</h2>
                <h3 className='regular-16 pd-content'>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                </h3>
            </div> */}
            {/*4: funding */}
            {/* we dont have funding information from response yet */}
            {/* <div className='pd-funding .pd-contain' id='fundings'>
                <h2 className='pd-funding-heading pd-heading'>
                    funding provided by
                </h2>

                <h3 className='regular-16 pd-content lastItem'>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                </h3>
            </div> */}
        </section>
    );
};

export default ProjectDetailsLeft;
