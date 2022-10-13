// ITEM 1: Understand the Relationship Between TypeScript and JavaScript
// Greeting function
function greet(who) {
    console.log("Hello", who);
}
greet("Danny");
// ToUpperCase()
var city = "new york city";
console.log(city.toUpperCase());
var states = [
    { name: "Alabama", capital: "Montgomery" },
    { name: "Alaska", capital: "Juneau" },
    { name: "Arizona", capital: "Phoenix" },
];
for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
    var state = states_1[_i];
    console.log(state.name + " " + state.capital);
}
// const a = null + 7; // Evaluates to 7 in JS
//     // ~~~~ Operator '+' cannot be applied to types ...
// const b = [] + 12; // Evaluates to '12' in JS
var names = ["Alice", "Bob"];
// console.log(names[2].toUpperCase()); // TypeError: Cannot read property 'toUpperCase' of undefined
// TypeScript assumed the array access would be within bounds, but it was not. The result was an exception
// ITEM 2: Know Which TypeScript Options You're Using
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
var x = null;
function calculateArea(shape) {
    if ("height" in shape) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    else {
        shape; // Type is Square
        return shape.width * shape.width;
    }
}
// Type Operations Cannot Affect Runtime Values
function asNumber(val) {
    return typeof val === "string" ? Number(val) : val;
}
console.log(asNumber(134));
console.log(asNumber("123"));
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
var v = { x: 3, y: 4, name: "Zee" };
console.log(calculateLength(v)); // OKm result is 5
function normalize(v) {
    var length = calculateLengthL1(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length
    };
}
function calculateLengthL1(v) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
console.log(normalize({ x: 3, y: 4, z: 5 })); // Output {x:0.25, y:0.33, z: 0.41667}
var C = /** @class */ (function () {
    function C(foo) {
        this.foo = foo;
    }
    return C;
}());
var c = new C("instance of C");
var d = { foo: "object literal" }; // OK!
// ITEM 5: Limit Use of the any Type
var age;
age = "12"; //OK
age += 1; // OK; at runtime, age is now "121"
// now this chaos will go uncaught since the any type was used
// any Lets You Break Contracts
function calculateAge(birthDate) {
    // ...
}
var birthDate = "1990-01-19";
calculateAge(birthDate); // OK
// The birthDate parameter should be a Date, not a string
// This will become problematic
// There is also no autocomplete for properties on symbols with any types
// any Types Mask Bugs When You Refactor Code
// any type effectively silences the type checker and TypeScript language services
