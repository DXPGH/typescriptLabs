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
var p = {
    firstName: "Danny",
    lastName: "Phongsouthy"
};
var ps = {
    firstName: "Alan",
    lastName: "Turing",
    birth: new Date("1912/06/23"),
    death: new Date("1954/06/07")
}; // OK
console.log(ps.firstName + " " + "Birth " + ps.birth + "Death " + ps.death);
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
var Cylinder = /** @class */ (function () {
    function Cylinder() {
        this.radius = 1;
        this.height = 1;
    }
    return Cylinder;
}());
function calculateVolume(shape) {
    if (shape instanceof Cylinder) {
        shape; // OK, type is Cylinder
        shape.radius; // OK, type is number
    }
}
var v1 = typeof p; // Value is "object"
var v2 = typeof calculateVolume; // Value is "function"
