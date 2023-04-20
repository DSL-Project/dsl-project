import React, { useState, useEffect } from 'react';

import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues } from '../../../utils';

const PublicationDropdown = () => {
    const [localCounter, setLocalCounter] = useState(0);
    const {
        publications,
        updateFilters,
        filters: { pubType },
        updateCtr,
    } = useGlobalFilterContext();
    const uniquePublications = getUniqueValues(publications, 'publicationType');

    useEffect(() => {
        updateCtr(localCounter);
    }, [localCounter]);

    return (
        <select
            name='pubType'
            value={pubType}
            onChange={updateFilters}
            className='sel regular-caps'
        >
            <option value='' className='regular-caps placeholder'>
                PUBLICATION TYPE
            </option>
            ;
            {uniquePublications.map((pub, index) => {
                return (
                    <option
                        key={index}
                        value={pub}
                        className='op regular-caps'
                        onClick={() => setLocalCounter(1)}
                    >
                        {pub}
                    </option>
                );
            })}
        </select>
    );
};

/**The code below is a backup in case we want to use checkboxes. The rease why I did not go for  code below, as it was difficult to maintain the state for the form */
/*import { MultiSelect } from 'react-multi-select-component';
import { getUniqueValues, dropdownRelatedData } from '../../../utils';
const PublicationDropdown = () => {
    const [selected, setSelected] = useState([]);
    const { publications, updateFilters } = useGlobalFilterContext();
    const uniquePubType = getUniqueValues(publications, 'publicationType');
    const data = dropdownRelatedData(uniquePubType);

    updateFilters({ selected, type: 'pubType' });

    return (
        <MultiSelect
            options={data}
            value={selected}
            onChange={setSelected}
            labelledBy='publication dropdown'
            className='single-select'
            disableSearch
            hasSelectAll={false}
        />
    );
};*/

export default PublicationDropdown;
