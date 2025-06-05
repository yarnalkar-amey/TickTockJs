/**
 * Extracts all major components of a date as an array.
 * 
 * @param {string|Date} inputDate - A date string or Date object.
 * @returns {number[]} An array with the following values:
 *   [0] Year
 *   [1] Month (1-based: Jan = 1)
 *   [2] Day of month
 *   [3] Day of week (0 = Sunday, 6 = Saturday)
 *   [4] Hour (0–23)
 *   [5] Minutes
 *   [6] Seconds
 *   [7] Milliseconds
 */
function getAllDateElements(inputDate) {
    const date = new Date(inputDate);
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getDay(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
}

/**
 * Extracts all major components of a date as a named object.
 * 
 * @param {string|Date} inputDate - A date string or Date object.
 * @returns {Object} An object with the following keys:
 *   year: Full year (e.g., 2025)
 *   month: Month number (1-based: Jan = 1)
 *   day: Day of the month
 *   weekday: Day of the week (0 = Sunday, 6 = Saturday)
 *   hours: Hours (0–23)
 *   minutes: Minutes (0–59)
 *   seconds: Seconds (0–59)
 *   milliseconds: Milliseconds (0–999)
 */
function getDateNamedElements(inputDate) {
    const date = new Date(inputDate);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        weekday: date.getDay(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds()
    };
}

const dateElements = {
    getAllDateElements,
    getDateNamedElements
};

export default dateElements;
