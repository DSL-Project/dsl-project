import React from 'react';
import { useGlobalContext } from '../../appContext';
import { Link } from 'react-router-dom';

const PeopleList = () => {
    const { authors, setAuthorById } = useGlobalContext();

    const handleClick = (id) => {
        setAuthorById(id);
    };

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

            {/* rendering staff members */}
            <div className='wrapper people-wrapper'>
                <h2>Staff</h2>
                <ul className='list'>
                    {authors.map((staffMember) => {
                        const { id, name, title, img, about } = staffMember;
                        const { isStaff } = about;
                        return (
                            <li className='list-item' key={id}>
                                {isStaff && (
                                    <Link
                                        to={`/people/staff/${
                                            name.split(' ')[0]
                                        }`}
                                        onClick={() => handleClick(id)}
                                    >
                                        <div className='img-container'>
                                            <img
                                                src={img}
                                                alt={`${name} is looking at the camera`}
                                            />
                                        </div>
                                        <div className='text-container'>
                                            <h3>{name}</h3>
                                            {title !== 'null' ? (
                                                <h4>{title}</h4>
                                            ) : null}
                                        </div>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='underline'></div>

            {/* rendering students */}
            <div className='wrapper people-wrapper'>
                <h2>Students</h2>
                <ul className='list'>
                    {authors.map((staffMember) => {
                        const { id, name, title, img, about } = staffMember;
                        const { isStudent } = about;
                        return (
                            <li className='list-item' key={id}>
                                {isStudent && (
                                    <Link
                                        to={`/people/student/${
                                            name.split(' ')[0]
                                        }`}
                                        onClick={() => handleClick(id)}
                                    >
                                        <div className='img-container'>
                                            <img
                                                src={img}
                                                alt={`${name} is looking at the camera`}
                                            />
                                        </div>
                                        <div className='text-container'>
                                            <h3>{name}</h3>
                                            {title !== 'null' ? (
                                                <h4>{title}</h4>
                                            ) : null}
                                        </div>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default React.memo(PeopleList);
