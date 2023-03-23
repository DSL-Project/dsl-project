import React from 'react';

const Announcement = () => {
    return (
        <section className='announcement-link'>
            <a
                href='http://trybut.fail/dsl/opportunities'
                className='annouce-link'
            >
                <div className='annnounce'>
                    <h3 className='announce-text'>
                        The lab is looking for a new Director of cliff services.{' '}
                        <span className='cta'>More - </span>
                    </h3>
                </div>
            </a>
        </section>
    );
};

export default Announcement;
