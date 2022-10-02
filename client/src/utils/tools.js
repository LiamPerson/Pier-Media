/**
 * This file is intended as a collection of useful tools.
 * ** Tools are to be pure only! **
 */

/**
 * Cuts a string to a desired maximum character length. Adds ellipses (...) to end of string keeping within character limit.
 * @param {String} string The string you want to cut.
 * @param {Number} [maxLength] The maximum amount of characters you want the string to have including ellipses.
 * @returns {String}
 */
 export const cutString = (string, maxLength = 10) => {
    if(string.length <= maxLength) return string;
    return string.substring(0, maxLength - 4) + "...";
}

/**
 * Converts a string to Capital Case.
 * @param {String} string 
 * @returns {String}
 */
 export const capitalise = string => {
    return string.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}