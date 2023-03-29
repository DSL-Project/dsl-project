import React from 'react';

const Searchbar = () => {
    return (
        <section className='search-bar'>
            <form action='#' className='form'>
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
                        >
                            <option value='placeholder' disabled id='sort'>
                                sort by
                            </option>
                            <option value='item1'>item1</option>
                            <option value='item2'>item2</option>
                        </select>
                    </fieldset>
                </fieldset>

                {/* search bar */}
                {/* child  */}
                <fieldset className='child2'>
                    <label htmlFor='search' className='sr-only'>
                        search
                    </label>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='search'
                        className='regular-caps searchBx bx'
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default Searchbar;
