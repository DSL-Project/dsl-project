import React from 'react';
import { useGlobalContext } from '../../appContext';
import { Link } from 'react-router-dom';

const PeopleList = () => {
    const { authors, setAuthorById } = useGlobalContext();

    const handleClick = (id) => {
        setAuthorById(id);
    };

    return (
        <section className='people-main'>
            {/* rendering staff members */}
            <div className='wrapper'>
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
            <hr />

            {/* rendering students */}
            <div className='wrapper'>
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
        </section>
    );
};

export default PeopleList;