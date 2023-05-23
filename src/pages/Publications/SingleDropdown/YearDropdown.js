import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const data = [
    {
        value: 'year-1',
        label: '2021',
    },
    {
        value: 'year-2',
        label: '2022',
    },
    {
        value: 'year-3',
        label: '2023',
    },
];

const YearDropdown = () => {
    const [selected, setSelected] = useState([]);

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
