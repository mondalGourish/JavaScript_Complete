/*
1. map() — The TransformerUse map() when you want to perform the exact same operation on every single item in an array and get a new array back.How it works: It loops through the array, modifies each item using your callback function, and pushes the result into a new array.
Code Example:

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

2. filter() — The SelectorUse filter() when you want to screen out certain items from an array based on specific criteria.How it works: It runs a test against every item. If the item passes (true), it goes into the new array. If it fails (false), it is left out.
Code Example:

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4]

3. reduce() — The AggregatorUse reduce() when you need to take an entire list of data and boil it down to a single outcome, such as a sum, a product, a string, or a completely different object.How it works: It passes a running total (called an accumulator) from one element to the next. You should pass a second argument to specify the starting value of that accumulator.
Code Example:

const numbers = [1, 2, 3, 4];
0 is the initial value of the accumulator
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); 

console.log(sum); // 10
*/