import React, { useEffect } from 'react';
import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import Searchbar from './Searchbar';
import { PUBLICATIONS } from '../../appConstants';
import PublicationCard from './PublicationCard';
import LoadingState from '../../components/LoadingState/LoadingState';
import { useGlobalFilterContext } from '../../filterContext';

const Publications = () => {
    const { closeSubmenu, filteredPublications: response } =
        useGlobalFilterContext();

    console.log('RESPONSE: ', response);
    const {
        // response,
        publicationsBody,
        publicationsTitle,
        setQuery,
        isLoading,
    } = useGlobalContext();
    // console.log('RESPONSE IN PUBLI: ', response);

    useEffect(() => {
        window.addEventListener('beforeunload', setQuery(PUBLICATIONS));
        return () => {
            window.removeEventListener('beforeunload', setQuery(PUBLICATIONS));
        };
    }, [setQuery]);

    if (isLoading) {
        return <LoadingState />;
    }
    if (response === undefined) {
        return null;
    }

    return (
        <main className='publication-main'>
            {/* rendering banner */}
            <Banner title={publicationsTitle} info={publicationsBody} />

            {/* <section className='publication-list'> */}
            <div className='wrapper pub-wrapper'>
                {/* search bar */}
                <Searchbar />
                {/* <div className='content-container'> */}
                {response.map((publication, id) => {
                    return (
                        <div
                            className='single-content'
                            key={id}
                            onClick={closeSubmenu}
                        >
                            {publication.date !== undefined && (
                                <h2 className='year'>
                                    {publication.date.substring(0, 4)}
                                </h2>
                            )}
                            <PublicationCard
                                key={id}
                                publication={publication}
                                id={id}
                            />
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Publications;
