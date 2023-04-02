import React, { useEffect } from 'react';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import Person from './Person';
import { PEOPLE } from '../../appConstants';
const People = () => {
    const { response, peopleBody, peopleTitle, setQuery } = useGlobalContext();

    useEffect(() => {
        window.addEventListener('beforeunload', setQuery(PEOPLE));
        return () => {
            window.removeEventListener('beforeunload', setQuery(PEOPLE));
        };
    }, [setQuery]);

    return (
        <main className='people-main'>
            {/* banner */}
            <Banner title={peopleTitle} info={peopleBody} />

            <section className='people-list'>
                {/* rendering staff */}
                <div className='wrapper group'>
                    <h2 className='category-title'>staff</h2>
                    <ul className='staff contributor'>
                        {response
                            .filter((person) => person.isStaff)
                            .map((staffMember, id) => {
                                const memberInfo = {
                                    ...staffMember,
                                    memberType: 'staff',
                                };
                                return (
                                    <Person key={id} memberInfo={memberInfo} />
                                );
                            })}
                    </ul>
                </div>
                <h3 className=' wrapper semi-14 section-description'>
                    digital society lab founder, faculty of social science
                </h3>

                {/* rendering students */}
                <div className='wrapper group'>
                    <h2 className='category-title'>students</h2>
                    <ul className='students contributor'>
                        {response
                            .filter((person) => person.isStudent)
                            .map((student, id) => {
                                const memberInfo = {
                                    ...student,
                                    memberType: 'student',
                                };
                                return (
                                    <Person key={id} memberInfo={memberInfo} />
                                );
                            })}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default People;
