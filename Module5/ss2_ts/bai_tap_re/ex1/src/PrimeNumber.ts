function isPrimeNumber(number: number) {
  if (number == 1 || number == 2 || number == 3) return true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

function printPrime(number: number): string {
  let count: number = 0;
  let i = 1;
  let ans: string = "List Prime Number: ";
  while (count < number) {
    let nextSpace: string = ", ";
    count === number - 1 ? (nextSpace = ".") : (nextSpace = ", ");
    if (isPrimeNumber(i)) {
      count++;
      ans += `${i}${nextSpace}`;
    }
    i++;
  }
  return ans;
}

console.log(printPrime(5));
