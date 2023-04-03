import React, { useEffect } from 'react';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import { TRAININGS } from '../../appConstants';
import LoadingState from '../../components/LoadingState/LoadingState';

const Training = () => {
    const { trainingBody, trainingTitle, response, setQuery, isLoading } =
        useGlobalContext();

    console.log('TRAINING RESPONSE: ', response);

    useEffect(() => {
        window.addEventListener('beforeunload', setQuery(TRAININGS));
        return () => {
            window.removeEventListener('beforeunload', setQuery(TRAININGS));
        };
    }, [setQuery]);

    if (isLoading) {
        return <LoadingState />;
    }
    if (response === undefined) {
        return null;
    }

    return (
        <div className='training'>
            <Banner title={trainingTitle} info={trainingBody} />

            {response.map((training, id) => {
                const { title, description, url } = training;

                return (
                    <div key={id} className='training-border'>
                        <div className='training-wrapper wrapper'>
                            <div key={id} className='training-container'>
                                <h2 className='training-title'>{title}</h2>
                                <p className='regular-16 training-description'>
                                    {description}
                                </p>
                                <p className='bold-16 training-link'>
                                    To learn more about the program and apply,
                                    visit&nbsp;
                                    <a className='training-anchor' href={url}>
                                        socialsciences.mcmaster.ca/master-of-public-policy
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
