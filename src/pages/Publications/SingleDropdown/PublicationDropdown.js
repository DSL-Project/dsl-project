import React from 'react';

import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues } from '../../../utils';

const PublicationDropdown = () => {
    const {
        publications,
        updateFilters,
        filters: { pubType },
        updateFilterCounter,
    } = useGlobalFilterContext();
    const uniquePublications = getUniqueValues(publications, 'publicationType');

    return (
        <>
            <div className='underline' />
            <select
                name='pubType'
                value={pubType}
                onChange={updateFilters}
                className='sel regular-caps'
            >
                <option
                    value=''
                    className='regular-caps placeholder'
                    data-c={0}
                    onClick={updateFilterCounter}
                >
                    PUBLICATION TYPE
                </option>
                ;
                {uniquePublications.map((pub, index) => {
                    return (
                        <option
                            key={index}
                            value={pub}
                            className='op regular-caps'
                            data-c={1}
                            onClick={updateFilterCounter}
                        >
                            {pub}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default PublicationDropdown;
