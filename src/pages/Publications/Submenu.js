import React from 'react';
import PublicationDropdown from './SingleDropdown/PublicationDropdown';
import AuthorDropdown from './SingleDropdown/AuthorDropdown';
import YearDropdown from './SingleDropdown/YearDropdown';
import { useGlobalFilterContext } from '../../filterContext';
const Submenu = () => {
    const { closeSubmenu, clearFilters, ctr, resetCtr } =
        useGlobalFilterContext();
    return (
        <section className='main-subform'>
            <div className='subform-container'>
                <header className='subform-header'>
                    <div className='top-container'>
                        <p className='filter-heading bold-caps'>filters</p>
                        <button
                            className='clear-btn regular-caps'
                            onClick={() => {
                                clearFilters();
                                closeSubmenu();
                                resetCtr();
                            }}
                        >
                            clear
                        </button>
                    </div>
                    <div className='item-selected'>
                        <p className='item-selected-text regular-14'>
                            {/* 0 selected */}
                            {`${ctr > 3 ? 3 : ctr} selected`}
                        </p>
                    </div>
                </header>

                {/* publication type */}
                <div className='subform-main'>
                    <PublicationDropdown />
                    <AuthorDropdown />
                    <YearDropdown />
                    <button
                        className='view-result-btn medium-14'
                        onClick={closeSubmenu}
                    >
                        view results
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Submenu;
