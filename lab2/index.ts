// Chapter 2 TypeScript's Type System

// ~~~~~~~~~~~~~~~
// Item6: Use Your Editor to Interrogate the Explore the Type System
// ~~~~~~~~~~~~~~~

let num: number = 10;
function add(a: number, b: number) {
  return a + b;
}
function logMessage(message: string | null) {
  if (message) {
    message;
  }
}
const foo = {
  x: [1, 2, 3],
  bar: {
    name: "Fred",
  },
};

// ~~~~~~~~~~~~~~~
// Item7: Think of Types as Sets of Values
// ~~~~~~~~~~~~~~~

// const x: never = 12;
// ~ Type '12' is not assignable to type 'never'

// Considered as literal types which contain single values
type A = "A";
type B = "B";
type Twelve = 12;

// Union unit types
type AB = "A" | "B";
type AB12 = "A" | "B" | 12;

const a: AB = "A"; // OK, value 'A' is a member of the set {'A', 'B'}
// const c: AB = 'C'; Type 'C' is not assignable to type 'AB'

const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}

declare let twelve: AB12;
// const back: AB = twelve; // Type '12' is not assignable to type 'AB'

interface Identified {
  id: string;
}
const identified: Identified = {
  id: "identified",
};
interface Person {
  firstName: string;
  lastName: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

const p: Person = {
    firstName: "Danny",
    lastName: "Phongsouthy"
}

const ps: PersonSpan = {
  firstName: "Alan",
  lastName: "Turing",
  birth: new Date("1912/06/23"),
  death: new Date("1954/06/07"),
}; // OK
console.log(ps.firstName + " " + "Birth " + ps.birth + "Death " + ps.death);

// This is another common way of implementing the PersonSpan
// interface PersonSpan extends Person {
//     birth: Date;
//     death?: Date;
// }

interface Vector1D {
  x: number;
}
interface Vector2D extends Vector1D {
  y: number;
}
interface Vector3D extends Vector2D {
  z: number;
}

function getKey<K extends string>(val: any, key: K) {}
getKey({}, "x"); // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? "a" : "b"); // OK, 'a'|'b' extends string
// getKey({}, 12); Type '12' is not assignable to a parameter of type 'string'

interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // Type is "x"|"y"

function sortBy<K extends keyof T, T>(vals: T[], key: K) {
  // ...
}
const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];
sortBy(pts, "x"); // OK, 'x' extends 'x'|'y' (aka keyof T)

type NonZeroNums = Exclude<number, 0>;
let ten: NonZeroNums = 10;
let zero: NonZeroNums = 0;

type tupleExample = [number, string, number];

let tupleExample1: tupleExample[] = [
  [1, "scoop", 1],
  [2, "bloop", 2],
];

console.log(tupleExample1[0] + " || " + tupleExample1[1]);

// ~~~~~~~~~~~~~~~
// Item8: Know How to Tell Whether a Symbol Is in the Type Space or Value Space
// ~~~~~~~~~~~~~~~

interface Cylinder {
    radius: number;
    height: number;
}
// const Cylinder = (radius: number, height:number) => ({radius, height});
// interface Cylinder is in the type space
// const Cylinder is in the value space

// function calculateVolume(shape: unknown) {
//     if (shape instanceof Cylinder) {
//         shape.radius
//         // ~~~ Property 'radius' does not exist on type '{}'
//     }
// }
// Generally symbols after a type or interface are in type space while those introduced in a const or let declaration are values.

class Cylinder {
    radius = 1;
    height=1;
}

function calculateVolume(shape: unknown){
    if (shape instanceof Cylinder){
        shape // OK, type is Cylinder
        shape.radius // OK, type is number
    }
}

type T1 = typeof p; // Type is Person
type T2 = typeof ps; // Type is Person & Lifespan
const v1 = typeof p; // Value is "object"
const v2 = typeof calculateVolume; // Value is "function"

// ~~~~~~~~~~~~~~~
// Item9: Prefer Type Declarations to Type Assertions
// ~~~~~~~~~~~~~~~

type regularPerson = {
    name: string;
}

// Type is Person. This is Type Declaration. This is more preferred
const alice: regularPerson = {name: "Alice"}; 

// Type is Person. This is Type Assertion
const bob = {name: "Bob"} as regularPerson;

// Type Assertion will silence errors by telling the type checker that, for whatever reason, you know better than it does.


// Example of how to do Type Declaration on a function
const people = ['alice', 'bob', 'jan'].map(
    (name): regularPerson => ({name}));

// Another Example of Type Declaration 
const people1: regularPerson[] = ['alice', 'bob', 'jan'].map(
    (name): regularPerson => ({name}));

// One instance of needing to use Type Assertion however is when you truly do know more about a type than TypeScript does, this could be typically about a DOM element.
// document.querySelector('#myButton').addeventListener('click', e => {
//     e.currentTarget // Type is EventTarget
//     const button = e.currentTarget as HTMLButtonElement;
//     button // Type is HTMLButtonElement
// })
// Because TypeScript doesn't have access to the DOM of your page, it has no way of knowing that #myButton is a button element

// const elNull = document.getElementById('foo'); // Type is HTMLElement | null
// const el = document.getElementById('foo')!; // Type is HTMLElement

// Used as a prefix, ! is a boolean negation
// But used as a suffix, ! is interpreted as an assertion

// Prefer type declarations (: Type) to type assertions (as Type)

// ~~~~~~~~~~~~~~~
// Item10: Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)
// ~~~~~~~~~~~~~~~

// Pretty much Avoid TypeScript object wrapper types.
// Use the primitive types instead: string instead of String
// number instead of Number
// boolean instead of Boolean
// symbol instead of Symbol
// bigint instead of BigInt

// ~~~~~~~~~~~~~~~
// Item11: Recognize the Limits of Excess Property Checking
// ~~~~~~~~~~~~~~~

