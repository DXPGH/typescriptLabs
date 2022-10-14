// Chapter 2 TypeScript's Type System

// Item6: Use Your Editor to Interrogate the Explore the Type System

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

// Item7: Think of Types as Sets of Values

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
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1912/06/23"),
  death: new Date("1954/06/07"),
}; // OK
console.log(ps.name + " " + "Birth " + ps.birth + "Death " + ps.death);

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

// Item8: Know How to Tell Whether a Symbol Is in the Type Space or Value Space

