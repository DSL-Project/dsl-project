/*
  Utility functions, any generic function that accomplishes an abstract task.
*/

export const printMonthYear = (dateString) => {
    const date = new Date(dateString);
    const dateArray = date.toString().split(' ');
    return `${dateArray[1]} ${dateArray[3]}`;
};
