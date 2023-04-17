import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { useGlobalFilterContext } from '../../../filterContext';

import { getUniqueValues, dropdownRelatedData } from '../../../utils';

const PublicationDropdown = () => {
    const [selected, setSelected] = useState([]);
    const { publications } = useGlobalFilterContext();
    const uniquePubType = getUniqueValues(publications, 'publicationType');
    const data = dropdownRelatedData(uniquePubType);

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
};

export default PublicationDropdown;
