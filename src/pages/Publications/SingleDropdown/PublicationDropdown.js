import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const data = [
    {
        value: 'journal aritcle',
        label: 'Journal Article',
    },
    {
        value: 'popular press',
        label: 'Popular Press',
    },
    {
        value: 'independent media',
        label: 'Independent Media',
    },
];

const PublicationDropdown = () => {
    const [selected, setSelected] = useState([]);

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
