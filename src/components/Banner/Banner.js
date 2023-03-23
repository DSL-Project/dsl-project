import React from 'react';
const Banner = ({ title, info }) => {
    return (
        <section className='banner'>
            <div className='banner-container'>
                <h1 className='banner-heading'>{title}</h1>
                <p className='banner-content medium-16'>{info}</p>
            </div>
        </section>
    );
};

export default Banner;
