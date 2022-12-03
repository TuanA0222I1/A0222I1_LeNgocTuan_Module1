"use strict";
exports.__esModule = true;
var readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
var promise = new Promise(function (resolve, reject) {
    readLine.question("Input your money: ", function (answer) {
        readLine.close();
        setTimeout(function () {
            typeof +answer == "number"
                ? resolve(answer)
                : reject("error input number");
        }, 2000);
    });
});
promise
    .then(function (x) {
    +x > 1000
        ? console.log("".concat(x, " buy car success!!!"))
        : console.log("Not enoughs!");
})["catch"](function (error) {
    console.log(error);
});
