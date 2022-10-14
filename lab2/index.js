// Chapter 2 TypeScript's Type System
// ~~~~~~~~~~~~~~~
// Item6: Use Your Editor to Interrogate the Explore the Type System
// ~~~~~~~~~~~~~~~
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
// Type is Person. This is Type Declaration. This is more preferred
var alice = { name: "Alice" };
// Type is Person. This is Type Assertion
var bob = { name: "Bob" };
// Type Assertion will silence errors by telling the type checker that, for whatever reason, you know better than it does.
// Example of how to do Type Declaration on a function
var people = ["alice", "bob", "jan"].map(function (name) { return ({ name: name }); });
// Another Example of Type Declaration
var people1 = ["alice", "bob", "jan"].map(function (name) { return ({ name: name }); });
var obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: "present"
};
var r = obj; // OK
function createWindow(options) {
    if (options.darkMode) {
        setDarkMode();
    }
    // ...
}
function setDarkMode() {
    var darkMode = true;
    return darkMode;
}
createWindow({
    title: "Spider Solitaire",
    darkMode: true
});
var o = { darkMode: true, title: "Ski Free" };
var o1 = { darkmode: true, title: "Ski Free" }; // OK
var o2 = { darkmode: true }; // OK
// interface LineChartOptions {
//     logscale?: boolean;
//     invertedYAxis?: boolean;
//     areaChart?: boolean;
// }
// const opts = {logScale: true}; // Problem line as logScale is not a property of LineChartOptions
// const o3: LineChartOptions = opts;
// ~~~~~~~~~~~~~~~
// Item12: Apply Types to Entire Function Expressions When Possible
// ~~~~~~~~~~~~~~~
function rollDice1(sides) {
    /* ... */
    return 1;
} // Statement
var rollDice2 = function (sides) {
    /* ... */
    return 2;
}; // Expression
var rollDice3 = function (sides) {
    /* ... */
    return 3;
}; // Also Expression
var rollDice = function (sides) {
    /* ... */
    return 4;
};
// As statement you would need to declare each variable type each time
function add1(a, b) {
    return a + b;
}
function sub1(a, b) {
    return a - b;
}
function mul1(a, b) {
    return a * b;
}
function div1(a, b) {
    return a / b;
}
var add2 = function (a, b) { return a + b; };
var sub2 = function (a, b) { return a - b; };
var mul2 = function (a, b) { return a * b; };
var div2 = function (a, b) { return a / b; };
console.log(add2(1, 2)); // 3
console.log(sub2(2, 1)); // 1
console.log(mul2(2, 2)); // 4
