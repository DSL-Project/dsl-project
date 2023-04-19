import React from 'react';

import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues } from '../../../utils';

const PublicationDropdown = () => {
    const {
        publications,
        updateFilters,
        filters: { pubType },
    } = useGlobalFilterContext();
    const uniquePublications = getUniqueValues(publications, 'publicationType');

    return (
        <select
            name='pubType'
            value={pubType}
            onChange={updateFilters}
            className='sel regular-caps'
        >
            <option value='' selected className='regular-caps placeholder'>
                PUBLICATION TYPE
            </option>
            ;
            {uniquePublications.map((pub, index) => {
                return (
                    <option key={index} value={pub} className='op regular-caps'>
                        {pub}
                    </option>
                );
            })}
        </select>
    );
};

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
