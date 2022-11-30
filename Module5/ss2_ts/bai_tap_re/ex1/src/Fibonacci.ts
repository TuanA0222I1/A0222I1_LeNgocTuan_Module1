function recursionFibonacci(number: number): number {
  if (number <= 2) {
    return 1;
  }
  return recursionFibonacci(number - 1) + recursionFibonacci(number - 2);
}

function sumFibonacci(number: number): number {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    let value = recursionFibonacci(i);
    console.log(value);
    sum += value;
  }
  return sum;
}

// console.log(recursionFibonacci(5));
console.log(`total : ${sumFibonacci(5)}`);
