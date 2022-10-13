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

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));

const x: number | null = null;

// ITEM 3: Understand That Code Generation Is Independent of Types

// You Cannot Check TypeScript Types at Runtime
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ("height" in shape) {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width;
  }
}

// Type Operations Cannot Affect Runtime Values
function asNumber(val: number | string): number {
  return typeof val === "string" ? Number(val) : val;
}
console.log(asNumber(134));
console.log(asNumber("123"));

// ITEM 4: Get Comfortable with Structural Typing

interface Vector2D {
  x: number;
  y: number;
}
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
interface NamedVector {
  name: string;
  x: number;
  y: number;
}
const v: NamedVector = { x: 3, y: 4, name: "Zee" };
console.log(calculateLength(v)); // OKm result is 5
// Although NamedVector has a name attribute it is still able to use the calculateLength Function because it has an x and y value.

interface Vector3D {
  x: number;
  y: number;
  z: number;
}
function normalize(v: Vector3D) {
  const length = calculateLengthL1(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}
function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
console.log(normalize({ x: 3, y: 4, z: 5 })); // Output {x:0.25, y:0.33, z: 0.41667}

class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C("instance of C");
const d: C = { foo: "object literal" }; // OK!

// ITEM 5: Limit Use of the any Type

let age: number;
age = "12" as any; //OK
age += 1; // OK; at runtime, age is now "121"
// now this chaos will go uncaught since the any type was used

// any Lets You Break Contracts
function calculateAge(birthDate: Date): void {
  // ...
}
let birthDate: any = "1990-01-19";
calculateAge(birthDate); // OK
// The birthDate parameter should be a Date, not a string
// This will become problematic
// There is also no autocomplete for properties on symbols with any types
// any Types Mask Bugs When You Refactor Code
// any type effectively silences the type checker and TypeScript language services
