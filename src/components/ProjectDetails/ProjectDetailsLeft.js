import React from 'react';
import TeamMember from './TeamMember';
import { TbExternalLink as ExternalLink } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const ProjectDetailsLeft = ({
    title,
    subtitle,
    about,
    tags,
    team,
    publications,
    media,
    url,
    status,
    startDate: date,
}) => {
    const [screenSize, setScreenSize] = React.useState(getCurrentWidth());

    const aboutArray =
        about?.content?.filter((item) => {
            return item?.content;
        }) || null;

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
                            <p className='bold-16 status'>{status}</p>
                            <p className='medium-16 year'>
                                {date.substring(0, 4)}-present
                            </p>
                        </div>

                        <div className='btn-container'>
                            <NavLink
                                className='medium-14 site-btn'
                                to={url}
                                target='_blank'
                            >
                                visit the site
                                <span className='site-icon'>
                                    <ExternalLink />
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}

            {/* about section */}
            <div className='pd-about'>
                {aboutArray !== null &&
                    aboutArray.map((item) =>
                        item?.content?.map((nesteditem, id) => (
                            <p key={id} className='regular-16 pd-about-content'>
                                {nesteditem.value}
                            </p>
                        ))
                    )}
            </div>

            {/* tags */}
            {tags !== undefined && (
                <ul className=' categories'>
                    <li className='semi-14' id='hash'>
                        #
                    </li>
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
                    <h2 className='pd-team-heading pd-heading'>Team</h2>
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

            {/* PUBLICATIONS */}
            {publications !== undefined && (
                <div className='pd-publications .pd-contain'>
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

            {/* MEDIA */}
            {media !== undefined && (
                <div className='pd-media .pd-contain'>
                    <h2 className='pd-media-heading pd-heading'>media</h2>
                    {media
                        .map((data) => {
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

            {/* Partners */}
            <div className='pd-partners .pd-contain'>
                <h2 className='pd-partner-heading pd-heading'>partners</h2>
                <h3 className='regular-16 pd-content'>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                </h3>
            </div>
            {/* funding */}
            <div className='pd-funding .pd-contain '>
                <h2 className='pd-funding-heading pd-heading'>
                    funding provided by
                </h2>

                <h3 className='regular-16 pd-content lastItem'>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                    <div className='dummy'></div>
                </h3>
            </div>
        </section>
    );
};

export default ProjectDetailsLeft;
