import React from 'react';
import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues } from '../../../utils';

const YearDropdown = () => {
    const {
        publications,
        updateFilters,
        filters: { year },
        updateFilterCounter,
    } = useGlobalFilterContext();
    const uniqueYears = getUniqueValues(publications, 'date');

    return (
        <>
            <div className='underline' />
            <select
                name='year'
                value={year}
                onChange={updateFilters}
                className='sel regular-caps'
            >
                <option
                    value=''
                    className='placeholder'
                    data-c={0}
                    onClick={updateFilterCounter}
                >
                    YEAR
                </option>
                {uniqueYears.map((yr, index) => {
                    return (
                        <option
                            key={index}
                            value={yr}
                            className='op regular-caps'
                            onClick={updateFilterCounter}
                            data-c={1}
                        >
                            {yr}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
export default YearDropdown;
