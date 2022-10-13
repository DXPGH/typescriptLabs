// ITEM 1: Understand the Relationship Between TypeScript and JavaScript

// Greeting function
function greet(who: string) {
  console.log("Hello", who);
}
greet("Danny");

// ToUpperCase()
let city: string = "new york city";
console.log(city.toUpperCase());

// Explicitly declaring the type of states
interface State {
  name: string;
  capital: string;
}
const states: State[] = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
];
for (const state of states) {
  console.log(state.name + " " + state.capital);
}

// const a = null + 7; // Evaluates to 7 in JS
//     // ~~~~ Operator '+' cannot be applied to types ...
// const b = [] + 12; // Evaluates to '12' in JS

const names = ["Alice", "Bob"];
// console.log(names[2].toUpperCase()); // TypeError: Cannot read property 'toUpperCase' of undefined
// TypeScript assumed the array access would be within bounds, but it was not. The result was an exception

// ITEM 2: Know Which TypeScript Options You're Using
