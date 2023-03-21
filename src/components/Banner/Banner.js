import React from 'react';
const Banner = ({ title, info }) => {
    return (
        <section className='banner'>
            <div className='banner-content'>
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
        </section>
    );
};

export default Banner;
