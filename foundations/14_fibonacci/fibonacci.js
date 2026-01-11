const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;

    let fn1 = 1;
    let fn2 = 0;

    for (let i = 2; i <= num; i++){
        let fibCurr = fn1 + fn2;
        fn1 = fn2;
        fn2 = fibCurr
    }
    return fn1 + fn2;
};

console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
