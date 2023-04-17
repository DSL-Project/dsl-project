import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues, dropdownRelatedData } from '../../../utils';

const AuthorDropdown = () => {
    const [selected, setSelected] = useState([]);
    const { publications } = useGlobalFilterContext();
    const uniqueAuthors = getUniqueValues(publications, 'authors');

    const data = dropdownRelatedData(uniqueAuthors);

    return (
        <MultiSelect
            options={data}
            value={selected}
            onChange={setSelected}
            labelledBy='author dropdown'
            className='single-select'
            disableSearch
            hasSelectAll={false}
        />
    );
};

export default AuthorDropdown;
