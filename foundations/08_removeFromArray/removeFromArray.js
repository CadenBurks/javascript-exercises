const removeFromArray = function(arr, ...theArgs) {
    return arr.filter(value => !theArgs.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
