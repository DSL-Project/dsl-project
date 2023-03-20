import React from 'react';
import { people } from '../../assets/testData';
const Test = () => {
    return (
        <main className='people-main'>
            {/* rendering banner */}
            <section className='banner'>
                <div className='banner-content'>
                    <h1>People</h1>
                    <p>
                        Section description faculty members in our department
                        are actively exploring the implications of digital
                        technology for both democratic and authoritarian
                        regimes, as well as its transformative role in global
                        governance.
                    </p>
                </div>
            </section>

            <section className='people-list'>
                <div className='wrapper group'>
                    {/* rendering staff */}
                    <h2 className='category-title'>Staff</h2>
                    <ul className='staff contributor '>
                        {people.map((person, id) => {
                            const { name, titles, img, website } = person;
                            return (
                                <li key={id}>
                                    <a
                                        href={'/people/staff/clifton'}
                                        className='profile-link'
                                    >
                                        <div className='profile-img'>
                                            <img src={img} alt='' />
                                        </div>
                                        <div className='profile-content'>
                                            <h2 className='profile-name'>
                                                {name}
                                            </h2>
                                            <h2 className='title'>
                                                {titles[0]}
                                            </h2>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className='underline'></div>

                {/* rendering students */}
                <div className='wrapper group'>
                    <h2 className='category-title'>students</h2>
                    <ul className='students contributor'>
                        {people.map((person, id) => {
                            const { name, titles, img, website } = person;
                            return (
                                <li key={id}>
                                    <a href={website} className='profile-link'>
                                        <div className='profile-img'>
                                            <img src={img} alt='' />
                                        </div>
                                        <div className='profile-content'>
                                            <h2 className='profile-name'>
                                                {name}
                                            </h2>
                                            <h2 className='title'>
                                                {titles[0]}
                                            </h2>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Test;
