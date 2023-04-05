import React, { useEffect } from 'react';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import { TRAININGS } from '../../appConstants';
import LoadingState from '../../components/LoadingState/LoadingState';

const Training = () => {
    const { trainingBody, trainingTitle, response, setQuery, isLoading } =
        useGlobalContext();

    useEffect(() => {
        window.addEventListener('beforeunload', setQuery(TRAININGS));
        return () => {
            window.removeEventListener('beforeunload', setQuery(TRAININGS));
        };
    }, [setQuery]);

    if (isLoading) {
        return <LoadingState />;
    }
    if (response === undefined || response.length < 1) {
        return null;
    }

    return (
        <div className='training'>
            <Banner title={trainingTitle} info={trainingBody} />

            {response.map((training, id) => {
                const { title, description, leadToUrl, url } = training;

                return (
                    <div key={id} className='training-border'>
                        <div className='training-wrapper wrapper'>
                            <div key={id} className='training-container'>
                                <h2 className='training-title'>{title}</h2>
                                <p className='regular-16 training-description'>
                                    {description}
                                </p>
                                <p className='bold-16 training-link'>
                                    {leadToUrl}&nbsp;
                                    <a className='training-anchor' href={url}>
                                        {url !== undefined && url.slice(8)}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Training;
