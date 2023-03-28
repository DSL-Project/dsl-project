import React from 'react';
const Banner = ({ title, info }) => {
    return (
        <section className='banner'>
            <div className='wrapper'>
                <div className='banner-container'>
                    <h1 className='banner-heading'>{title}</h1>
                    <p className='banner-content medium-16'>{info}</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
