import React, { useEffect } from 'react';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import Person from './Person';
import { PEOPLE } from '../../appConstants';
import LoadingState from '../../components/LoadingState/LoadingState';

const People = () => {
    const {
        peopleBody,
        peopleTitle,
        setQuery,
        isLoading,
        peopleData: response,
    } = useGlobalContext();

    useEffect(() => {
        // refresh button functionality
        window.addEventListener('beforeunload', setQuery(PEOPLE));
        return () => {
            window.removeEventListener('beforeunload', setQuery(PEOPLE));
        };
    }, [setQuery]);

    if (isLoading) {
        return <LoadingState></LoadingState>;
    }
    if (response === undefined) {
        return null;
    }

    return (
        <main className='people-main'>
            {/* banner */}
            <Banner title={peopleTitle} info={peopleBody} />

            <section className='people-list'>
                {/* rendering staff */}
                <div className='wrapper group'>
                    <h2 className='category-title' id='staff'>
                        staff
                    </h2>
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
                    <h2 className='category-title' id='students'>
                        students
                    </h2>
                    <ul className='students contributor'>
                        {response
                            .filter((person) => person.isStudent)
                            .map((student, id) => {
                                const memberInfo = {
                                    ...student,
                                    memberType: 'students',
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
