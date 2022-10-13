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
var names = ['Alice', 'Bob'];
console.log(names[1].toUpperCase());
