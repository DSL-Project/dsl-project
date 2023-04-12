import React from 'react';
// import CustomDropdown from './CustomDropdown';
import PublicationDropdown from './SingleDropdown/PublicationDropdown';
import AuthorDropdown from './SingleDropdown/AuthorDropdown';
import YearDropdown from './SingleDropdown/YearDropdown';

const Submenu = () => {
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
                    <PublicationDropdown />
                    <AuthorDropdown />
                    <YearDropdown />
                    <button className='view-result-btn medium-14'>
                        view results
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Submenu;
