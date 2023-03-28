import React from 'react';

import { useGlobalContext } from '../../appContext';
import Banner from '../../components/Banner/Banner';
import Searchbar from './Searchbar';

import PublicationCard from './PublicationCard';

const Publications = () => {
    const { response, publicationsBody, publicationsTitle } =
        useGlobalContext();

    return (
        <main className='publication-main'>
            {/* rendering banner */}
            <Banner title={publicationsTitle} info={publicationsBody} />

            <section className='publication-list'>
                <div className='wrapper content'>
                    {/*search bar */}
                    <Searchbar />
                    <div className='content-container'>
                        {response.map((publication, id) => {
                            return (
                                <div key={id}>
                                    {publication.date !== undefined && (
                                        <h2 className='year'>
                                            {publication.date.substring(0, 4)}
                                        </h2>
                                    )}
                                    <PublicationCard
                                        key={id}
                                        {...publication}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Publications;
