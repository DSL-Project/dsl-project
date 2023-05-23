import React from 'react';
import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues } from '../../../utils';

const AuthorDropdown = () => {
    const { publications, updateFilters, filters, updateFilterCounter } =
        useGlobalFilterContext();
    const uniqueAuthors = getUniqueValues(publications, 'authors');
    const { authors } = filters;

    return (
        <>
            <div className='underline' />
            <select
                name='authors'
                value={authors}
                onChange={updateFilters}
                className='sel regular-caps'
            >
                <option
                    value=''
                    className='placeholder regular-caps'
                    data-c={0}
                    onClick={updateFilterCounter}
                >
                    AUTHORS
                </option>

                {uniqueAuthors.map((auth, index) => {
                    return (
                        <option
                            key={index}
                            value={auth}
                            className='op regular-caps'
                            data-c={1}
                            onClick={updateFilterCounter}
                        >
                            {auth}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default AuthorDropdown;
