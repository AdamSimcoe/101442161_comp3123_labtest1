// Created by Adam Simcoe - 101442161
// Last Updated on October 3rd 2024

/* Question 1 - Create script with a function named lowerCaseWords that takes a mixed array as input, 
   returns a promise that is resolved or rejected, and filters all non-strings before lower casing 
   the remaining strings */

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords (array) {
    const filteredArray = array.filter(arrayItem => typeof arrayItem === 'string');
    const lowerCaseStrings = filteredArray.map(string => string.toLowerCase());

    return new Promise((resolve, reject) => {

        if (!Array.isArray(array)) {
            reject('This is not an array. Please try again with a valid array.');
        }
        else {
            resolve(lowerCaseStrings);
        }
    });
}

lowerCaseWords(mixedArray)
    .then(output => console.log(output))
    .catch(err => console.error(err));