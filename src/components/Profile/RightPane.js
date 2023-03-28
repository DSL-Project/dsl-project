import React from 'react';
import { persons } from '../../assets/testData';
const { projects, publications } = persons;

const RightPane = () => {
    return (
        <aside className='right-pane'>
            {/* associated projects to this person */}
            <div className='projects-container container'>
                <h3 className='bold-16 heading'>affiliated projects</h3>
                <ul className='project-list list'>
                    {projects.map((project, id) => {
                        const { url, subtitle } = project;
                        return (
                            <li key={id} className='list-item'>
                                <a
                                    href={url}
                                    className='medium-16 project'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {subtitle}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='underline' />

            {/* publications of this person */}
            <div className='publications-container container'>
                <h3 className='bold-16 heading'>publications </h3>
                <ul className='publication-list list'>
                    {publications.map((article, id) => {
                        const { title, date } = article;
                        return (
                            <li key={id} className='list-item'>
                                <div className='publication-container'>
                                    <p className='medium-16 publication'>
                                        {title}
                                    </p>
                                </div>

                                <div className='date-container'>
                                    <p className='medium-16 publication-on '>
                                        published
                                    </p>
                                    <time
                                        dateTime={date}
                                        className='medium-16 publication-date'
                                    >
                                        {date}
                                    </time>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default RightPane;
