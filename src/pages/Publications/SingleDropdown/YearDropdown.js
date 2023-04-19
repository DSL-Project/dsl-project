import React from 'react';
import { useGlobalFilterContext } from '../../../filterContext';
import { getUniqueValues } from '../../../utils';

const YearDropdown = () => {
    const {
        publications,
        updateFilters,
        filters: { year },
    } = useGlobalFilterContext();
    const uniqueYears = getUniqueValues(publications, 'date');
    return (
        <select
            name='year'
            value={year}
            onChange={updateFilters}
            className='sel regular-caps'
        >
            <option value='' className='placeholder'>
                YEAR
            </option>
            {uniqueYears.map((yr, index) => {
                return (
                    <option key={index} value={yr} className='op regular-caps'>
                        {yr}
                    </option>
                );
            })}
        </select>
    );
};

/*
import { MultiSelect } from 'react-multi-select-component';
import { getUniqueValues, dropdownRelatedData } from '../../../utils';
const YearDropdown = () => {
    const [selected, setSelected] = useState([]);
    const {
        publications,
        updateFilters,
        filters: { authors, year, pubType },
    } = useGlobalFilterContext();

    const uniqueYears = getUniqueValues(publications, 'date');

    const data = dropdownRelatedData(uniqueYears);
    updateFilters({ selected, type: 'year' });

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
*/
export default YearDropdown;
