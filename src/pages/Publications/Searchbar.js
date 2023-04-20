import React from 'react';
import Submenu from './Submenu';
import { useGlobalFilterContext } from '../../filterContext';
import closeIcon from '../../assets/closeIcon.png';

const Searchbar = () => {
    const {
        isSubmenuOpen,
        toggleSubmenu,
        updateSort,
        sort,
        filters,
        // filters: { text },
        updateFilters,
        clearFilters,
        filteredPublications,
        closeSubmenu,
        resetCtr,
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
                            name='text'
                            id='filter'
                            className='regular-caps filterBx bx'
                            placeholder='search'
                            value={filters.text}
                            onClick={toggleSubmenu}
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
                            className='regular-caps sortBx bx '
                            value={sort}
                            onChange={updateSort}
                        >
                            <option
                                value='placeholder'
                                // selected
                                id='sort'
                                className='placeholder regular-caps'
                            >
                                SORT BY
                            </option>
                            <option value='yearL' className='op regular-caps'>
                                Year Inc
                            </option>
                            <option value='yearH' className='op regular-caps'>
                                Year Dec
                            </option>
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

            {/* result */}
            {filteredPublications !== undefined && (
                <div className='result-found-container'>
                    <h3 className='result-found'>
                        {filteredPublications.length} results
                    </h3>
                    <button
                        className='clear-filters-btn regular-caps'
                        // onClick={handleOnClick}
                        onClick={() => {
                            clearFilters();
                            closeSubmenu();
                            resetCtr();
                        }}
                    >
                        clear filters
                    </button>
                </div>
            )}

            {/* filtered tags */}
            <div className='filtered-tags-container'>
                {/* publication type */}
                {filters.pubType && (
                    <button
                        className='filt-btn semi-14'
                        onClick={updateFilters}
                        name='pubType'
                    >
                        {filters.pubType}
                        <img
                            src={closeIcon}
                            alt='close icon'
                            name='pubType'
                            onClick={updateFilters}
                            className='close-img'
                        />
                    </button>
                )}

                {/* author */}
                {filters.authors && (
                    <button
                        className='filt-btn semi-14'
                        onClick={updateFilters}
                        name='authors'
                    >
                        {filters.authors}

                        <img
                            src={closeIcon}
                            alt='close icon'
                            name='authors'
                            onClick={updateFilters}
                            className='close-img'
                        />
                    </button>
                )}

                {/* year */}
                {filters.year && (
                    <button
                        className='filt-btn semi-14'
                        name='year'
                        onClick={updateFilters}
                    >
                        {filters.year}

                        <img
                            src={closeIcon}
                            alt='close icon'
                            name='year'
                            onClick={updateFilters}
                            className='close-img'
                        />
                    </button>
                )}
            </div>
        </section>
    );
};

export default Searchbar;
