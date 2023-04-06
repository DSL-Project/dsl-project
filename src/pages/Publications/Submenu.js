import React from 'react';
import CustomDropdown from './CustomDropdown';

const Submenu = () => {
    const publicationData = [
        {
            value: 'journal aritcle',
            key: 'Journal Article',
        },
        {
            value: 'popular press',
            key: 'Popular Press',
        },
        {
            value: 'independent media',
            key: 'Independent Media',
        },
    ];
    const authorData = [
        {
            value: 'author-1',
            key: 'Author-1',
        },
        {
            value: 'author-2',
            key: 'Author-2',
        },
        {
            value: 'author-3',
            key: 'Author-3',
        },
    ];
    const yearData = [
        {
            value: 'year-1',
            key: '2021',
        },
        {
            value: 'year-2',
            key: '2022',
        },
        {
            value: 'year-3',
            key: '2023',
        },
    ];
    return (
        <section className='main-subform'>
            <div className='subform-container'>
                <header className='subform-header'>
                    <div className='top-container'>
                        <p className='filter-heading bold-caps'>filters</p>
                        <button className='clear-btn regular-caps'>
                            clear
                        </button>
                    </div>
                    <div className='item-selected'>
                        <p className='item-selected-text regular-14'>
                            0 selected
                        </p>
                    </div>
                </header>

                {/* publication type */}
                <form className='subform-main'>
                    <CustomDropdown
                        title={'publication type'}
                        data={publicationData}
                    />
                    {/* author */}
                    <CustomDropdown title={'author'} data={authorData} />
                    {/* year */}
                    <CustomDropdown title={'year'} data={yearData} />
                    <button className='view-result-btn medium-14'>
                        view results
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Submenu;
