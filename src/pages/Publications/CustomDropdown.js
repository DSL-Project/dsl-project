/**
 * Inspiration:
// https://multiselect-react-dropdown.vercel.app/?path=/docs/multiselect-dropdown--custom-close-icon
// https://www.npmjs.com/package/multiselect-react-dropdown
 */
import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const CustomDropdown = ({ title, data }) => {
    const [count, setCount] = useState(0);

    return (
        <Multiselect
            showCheckbox={true}
            options={data}
            placeholder={`${count === 0 ? `${title}` : `${title} (${count})`}`}
            displayValue='key'
            onKeyPressFn={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onRemove={function noRefCheck() {
                setCount(count - 1);
            }}
            onSelect={function noRefCheck() {
                setCount(count + 1);
            }}
            className='custom-select'
            id='css_custom'
            showArrow='true'
            keepSearchTerm='false'
            disablePreSelectedValues
            hideSelectedList
            avoidHighlightFirstOption
            // selectedValueDecorator={function noRefCheck() {}}
        />
    );
};

export default CustomDropdown;
