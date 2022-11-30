"use strict";
exports.__esModule = true;
var readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
var promise = new Promise(function (resolve, reject) {
    readLine.question("Input your money: ", function (answer) {
        readLine.close();
        typeof +answer == "number" ? resolve(answer) : reject("error input number");
    });
});
promise
    .then(function (x) {
    +x > 1000
        ? displayResult("".concat(x, " buy car success!!!"))
        : console.log("Not enoughs!");
})["catch"](function (error) {
    console.log(error);
});
function displayResult(result) {
    setTimeout(log(result), 1000);
}
function log(result) {
    console.log(result);
}
