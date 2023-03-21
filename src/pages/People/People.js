import React from 'react';
import { people } from '../../assets/testData';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
const People = () => {
    const { response, peopleBody, peopleTitle } = useGlobalContext();
    console.log(`data for people page: `, response);

    return (
        <main className='people-main'>
            {/* banner */}
            <Banner title={peopleTitle} info={peopleBody} />

            <section className='people-list'>
                <div className='wrapper group'>
                    {/* rendering staff */}
                    <h2 className='category-title'>Staff</h2>
                    <ul className='staff contributor '>
                        {people.map((person, id) => {
                            const { name, titles, img } = person;
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
                            const { name, titles, img } = person;
                            return (
                                <li key={id}>
                                    <a
                                        href={`/people/student/clifton`}
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
            </section>
        </main>
    );
};

export default People;
