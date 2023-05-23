import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const data = [
    {
        value: 'author-1',
        label: 'Author-1',
    },
    {
        value: 'author-2',
        label: 'Author-2',
    },
    {
        value: 'author-3',
        label: 'Author-3',
    },
];

const AuthorDropdown = () => {
    const [selected, setSelected] = useState([]);

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
