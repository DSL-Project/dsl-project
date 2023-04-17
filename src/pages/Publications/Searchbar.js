import React from 'react';
import Submenu from './Submenu';
import { useGlobalFilterContext } from '../../filterContext';

const Searchbar = () => {
    const {
        isSubmenuOpen,
        toggleSubmenu,
        updateSort,
        sort,
        filters,
        updateFilters,
        clearFilters,
    } = useGlobalFilterContext();

    return (
        <section className='search-bar'>
            <form
                action='#'
                className='form'
                onSubmit={(e) => e.preventDefault()}
            >
                {/* filter dropdown */}
                <fieldset className='child1'>
                    <fieldset className='subchild1'>
                        <label htmlFor='filter' className='sr-only'>
                            filter
                        </label>
                        <input
                            type='text'
                            name='filter'
                            id='filter'
                            className='regular-caps filterBx bx'
                            placeholder='filter'
                            onClick={toggleSubmenu}
                            value={filters.text}
                            onChange={updateFilters}
                        ></input>
                    </fieldset>
                    {/* sort-by dropdown */}
                    <fieldset className='subchild2'>
                        <label htmlFor='sort' className='sr-only'>
                            sort by
                        </label>

                        <select
                            name='sort'
                            id='sort'
                            className='regular-caps sortBx bx'
                            value={sort}
                            onChange={updateSort}
                        >
                            <option value='placeholder' selected id='sort'>
                                sort by
                            </option>
                            <option value='yearL'>year inc</option>
                            <option value='yearH'>year dec</option>
                        </select>
                    </fieldset>
                    <div className='subMenu'>
                        {isSubmenuOpen && <Submenu />}
                    </div>
                </fieldset>

                {/* search bar */}
                {/* child  */}
                {/* <fieldset className='child2'>
                    <label htmlFor='search' className='sr-only'>
                        search
                    </label>
                    <input
                        type='text'
                        name='text'
                        id='search'
                        placeholder='search'
                        className='regular-caps searchBx bx'
                        value={filters.text}
                        onChange={updateFilters}
                    />
                </fieldset> */}
            </form>
        </section>
    );
};

export default Searchbar;
