/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-28
 * @fileoverview this program calculates the result of a given base to the power of an exponent
 */

//variables
const base = Number(prompt("Enter the base:"));
const exponent = Number(prompt("Enter the exponent:"));

let answer: number = 1;
let counter: number = 0;

//while loop
while (counter < exponent) {
  answer = base * answer;
  counter++;
}
//output
console.log(`${base} raised to the power of ${exponent} is ${answer}`);

console.log("\nDone.");