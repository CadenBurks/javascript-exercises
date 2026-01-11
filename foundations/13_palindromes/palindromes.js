const palindromes = function (str) {
    str = str.replaceAll(/[^\w\s]|_/g, "");
    str = (str.replaceAll(" ", "")).toLowerCase();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
};

console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
