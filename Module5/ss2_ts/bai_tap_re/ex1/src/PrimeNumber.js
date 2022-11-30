function isPrimeNumber(number) {
    if (number == 1 || number == 2 || number == 3)
        return true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}
function printPrime(number) {
    var count = 0;
    var i = 1;
    var ans = "List Prime Number: ";
    while (count < number) {
        var nextSpace = ", ";
        count === number - 1 ? (nextSpace = ".") : (nextSpace = ", ");
        if (isPrimeNumber(i)) {
            count++;
            ans += "".concat(i).concat(nextSpace);
        }
        i++;
    }
    return ans;
}
console.log(printPrime(5));
