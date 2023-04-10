// https://srigar.github.io/multiselect-react-dropdown/
import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { useGlobalFilterContext } from '../../filterContext';

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

const PublicationDropdown = () => {
    const [count, setCount] = useState(0);
    const { addTotalCount, subTotalCount } = useGlobalFilterContext();
    const title = 'publication';

    return (
        <Multiselect
            showCheckbox
            options={publicationData}
            placeholder={`${count === 0 ? `${title}` : `${title} (${count})`}`}
            displayValue='key'
            onKeyPressFn={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onRemove={function noRefCheck() {
                setCount(count - 1);
                subTotalCount();
            }}
            onSelect={function noRefCheck(e) {
                setCount(count + 1);
                addTotalCount();
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

export default PublicationDropdown;
