import { Square } from "./Square";

const square = new Square(1, 2, 3);

console.log(square.toString());
console.log(`perimeter: ${square.getPerimeter()}`);
console.log(`area: ${square.getArea()}`);
