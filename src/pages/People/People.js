import React from 'react';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
const People = () => {
    const { response, peopleBody, peopleTitle } = useGlobalContext();

    return (
        <main className='people-main'>
            {/* banner */}
            <Banner title={peopleTitle} info={peopleBody} />

            <section className='people-list'>
                <div className='wrapper group'>
                    {/* rendering staff */}
                    <h2 className='category-title'>staff</h2>
                    <ul className='staff contributor'>
                        {response
                            .filter((person) => person.isStaff)
                            .map((staffMember) => {
                                const { slug, name, titles, img } = staffMember;
                                const memberImg = img.fields.file.url;

                                return (
                                    <li key={slug}>
                                        <Link
                                            to={`/people/staff/${slug}`}
                                            className='profile-link'
                                        >
                                            <div className='profile-img'>
                                                <img
                                                    src={memberImg}
                                                    alt={`${name} is looking at the camera`}
                                                />
                                            </div>
                                            <div className='profile-content'>
                                                <h2 className='profile-name'>
                                                    {name}
                                                </h2>
                                                <h2 className='title'>
                                                    {titles[0]}
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>

                <div className='underline'></div>

                {/* rendering students */}
                <div className='wrapper group'>
                    <h2 className='category-title'>Students</h2>
                    <ul className='students contributor'>
                        {response
                            .filter((person) => person.isStudent)
                            .map((student) => {
                                const { slug, name, titles, img } = student;
                                const memberImg = img.fields.file.url;

                                return (
                                    <li key={slug}>
                                        <Link
                                            to={`/people/student/${slug}`}
                                            className='profile-link'
                                        >
                                            <div className='profile-img'>
                                                <img
                                                    src={memberImg}
                                                    alt={`${name} is looking at the camera`}
                                                />
                                            </div>
                                            <div className='profile-content'>
                                                <h2 className='profile-name'>
                                                    {name}
                                                </h2>
                                                <h2 className='title'>
                                                    {titles[0]}
                                                </h2>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default People;
