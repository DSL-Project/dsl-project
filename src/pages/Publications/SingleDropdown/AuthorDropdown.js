import React, { useState, useEffect } from 'react';
import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues } from '../../../utils';

const AuthorDropdown = () => {
    const [localCounter, setLocalCounter] = useState(0);
    const { publications, updateFilters, filters, updateCtr } =
        useGlobalFilterContext();
    const uniqueAuthors = getUniqueValues(publications, 'authors');
    const { authors } = filters;

    useEffect(() => {
        updateCtr(localCounter);
    }, [localCounter]);

    return (
        <>
            <div className='underline' />
            <select
                name='authors'
                value={authors}
                onChange={updateFilters}
                className='sel regular-caps'
            >
                <option value='' className='placeholder regular-caps'>
                    AUTHORS
                </option>

                {uniqueAuthors.map((auth, index) => {
                    return (
                        <option
                            key={index}
                            value={auth}
                            className='op regular-caps'
                            onClick={() => setLocalCounter(1)}
                        >
                            {auth}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

/* ---------------------------------------------------
import { MultiSelect } from 'react-multi-select-component';
const AuthorDropdown = () => {
    const [selected, setSelected] = useState([]);
    const { publications, updateFilters } = useGlobalFilterContext();
    const uniqueAuthors = getUniqueValues(publications, 'authors');
    const data = dropdownRelatedData(uniqueAuthors);

    updateFilters({ selected, type: 'authors' });

    return (
        <MultiSelect
            options={data}
            value={selected}
            onChange={setSelected}
            // onChange={updateFilters}
            labelledBy='author dropdown'
            className='single-select'
            disableSearch
            hasSelectAll={false}
        />
    );
};*/

export default AuthorDropdown;
