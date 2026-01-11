const getTheTitles = function(arr) {
    return arr.reduce((acc, obj) => {
        acc.push(obj.title);
        return acc;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
