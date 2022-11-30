import { rejects } from "assert";
import { error } from "console";
import { type } from "os";
import { resolve } from "path";
import { createInterface } from "readline";

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let promise = new Promise((resolve, reject) => {
  readLine.question("Input your money: ", (answer: number) => {
    readLine.close();
    typeof +answer == "number" ? resolve(answer) : reject("error input number");
  });
});

promise
  .then((x) => {
    +x > 1000
      ? displayResult(`${x} buy car success!!!`)
      : console.log("Not enoughs!");
  })
  .catch((error) => {
    console.log(error);
  });
function displayResult(result: string) {
  setTimeout(console.log(result), 1000);
}
