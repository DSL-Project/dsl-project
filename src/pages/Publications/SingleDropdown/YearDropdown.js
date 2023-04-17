import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues, dropdownRelatedData } from '../../../utils';

const YearDropdown = () => {
    const [selected, setSelected] = useState([]);
    const { publications } = useGlobalFilterContext();
    const uniqueYears = getUniqueValues(publications, 'date');
    const data = dropdownRelatedData(uniqueYears);

    return (
        <MultiSelect
            options={data}
            value={selected}
            onChange={setSelected}
            labelledBy='year dropdown'
            className='single-select'
            disableSearch
            hasSelectAll={false}
        />
    );
};

export default YearDropdown;
