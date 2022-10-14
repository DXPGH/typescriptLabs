// Chapter 2 TypeScript's Type System
// Item6: Use Your Editor to Interrogate the Explore the Type System
var num = 10;
function add(a, b) {
    return a + b;
}
function logMessage(message) {
    if (message) {
        message;
    }
}
var foo = {
    x: [1, 2, 3],
    bar: {
        name: "Fred"
    }
};
var a = "A"; // OK, value 'A' is a member of the set {'A', 'B'}
// const c: AB = 'C'; Type 'C' is not assignable to type 'AB'
var ab = Math.random() < 0.5 ? "A" : "B";
var ab12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
var identified = {
    id: "identified"
};
var ps = {
    name: "Alan Turing",
    birth: new Date("1912/06/23"),
    death: new Date("1954/06/07")
}; // OK
console.log(ps.name + " " + "Birth " + ps.birth + "Death " + ps.death);
function getKey(val, key) { }
getKey({}, "x"); // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? "a" : "b"); // OK, 'a'|'b' extends string
function sortBy(vals, key) {
    // ...
}
var pts = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
];
sortBy(pts, "x"); // OK, 'x' extends 'x'|'y' (aka keyof T)
var ten = 10;
var zero = 0;
var tupleExample1 = [
    [1, "scoop", 1],
    [2, "bloop", 2],
];
console.log(tupleExample1[0] + " || " + tupleExample1[1]);
// Item8: Know How to Tell Whether a Symbol Is in the Type Space or Value Space
