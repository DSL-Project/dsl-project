import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../assets/defaultImg.jpg';

const Person = ({ memberInfo }) => {
    const { slug, name, titles, memberType, img } = memberInfo;
    const personImg = img?.fields?.file?.url || defaultImg;

    return (
        <li className='personCard' key={slug}>
            <Link
                to={`/people/${memberType}/${slug}`}
                state={memberInfo}
                className='profile-link'
            >
                {/* person image */}
                <div className='profile-img'>
                    <img
                        src={personImg}
                        alt={personImg ? `${name}is looking at the camera` : ''}
                    />
                </div>

                {/* person name */}
                <div className='profile-content'>
                    <h2 className='semi-18 profile-name' id='name'>
                        {name}
                    </h2>

                    {/* person title */}
                    {titles !== undefined && (
                        <h2 className='title medium-16' id='title'>
                            {titles[0]}
                        </h2>
                    )}
                </div>
            </Link>
        </li>
    );
};

export default Person;
