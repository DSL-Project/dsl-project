/*
  Utility functions, any generic function that accomplishes an abstract task.
*/

export const printMonthYear = (dateString) => {
    const date = new Date(dateString);
    const dateArray = date.toString().split(' ');
    return `${dateArray[1]} ${dateArray[3]}`;
};

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    if (type === 'date') {
        unique = data.map((item) => item[type].split('-')[0]);
    }
    if (type === 'authors') {
        unique = data.map((item) =>
            item.authors.map((subItem) => subItem.fields.name)
        );
        unique = unique.flat();
    }
    if (type === 'publicationType') {
        unique = data.map((item) => {
            const targetString = item.publicationType;
            const arr = targetString.split(' ');

            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const str2 = arr.join(' ');
            return str2;
        });
    }
    return [...new Set(unique.sort())];
    // return ['all',...new Set(unique.sort())];
};

export const dropdownRelatedData = (uniqueItems) => {
    const tempData = [];
    uniqueItems.reduce(
        (acc, curr) => {
            acc.value = curr;
            acc.label = curr;
            tempData.push({ value: acc.value, label: acc.label });

            return acc;
        },
        { value: '', label: '' }
    );

    return tempData;
};
