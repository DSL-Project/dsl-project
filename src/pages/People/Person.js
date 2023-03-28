import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../assets/defaultImg.jpg';

const Person = ({ memberInfo }) => {
    const { slug, name, titles, memberType, img } = memberInfo;
    const personImg = img?.fields?.file?.url || defaultImg;
    const profileData = { ...memberInfo, personImg };

    return (
        <li className='personCard' key={slug}>
            <Link
                to={`/people/${memberType}/${slug}`}
                state={profileData}
                className='profile-link'
            >
                {/* person image */}
                <div className={`${personImg ? 'profile-img' : 'default-img'}`}>
                    <img
                        src={personImg}
                        alt={personImg ? `${name}is looking at the camera` : ''}
                    />
                </div>

                {/* person name */}
                <div className='profile-content'>
                    <h2 className='semi-18 profile-name'>{name}</h2>

                    {/* person title */}
                    {titles !== undefined && (
                        <h2 className='title medium-16' id='target'>
                            {titles[0]}
                        </h2>
                    )}
                </div>
            </Link>
        </li>
    );
};

export default Person;
