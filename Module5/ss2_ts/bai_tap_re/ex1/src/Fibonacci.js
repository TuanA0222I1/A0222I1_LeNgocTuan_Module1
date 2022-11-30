function recursionFibonacci(number) {
    if (number <= 2) {
        return 1;
    }
    return recursionFibonacci(number - 1) + recursionFibonacci(number - 2);
}
function sumFibonacci(number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        var value = recursionFibonacci(i);
        console.log(value);
        sum += value;
    }
    return sum;
}
// console.log(recursionFibonacci(5));
console.log("total : ".concat(sumFibonacci(5)));
