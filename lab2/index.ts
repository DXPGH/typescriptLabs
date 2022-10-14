// Chapter 2 TypeScript's Type System

// Item6: Use Your Editor to Interrogate the Explore the Type System

let num: number = 10;
function add(a: number, b: number) {
    return a + b;
}
function logMessage(message: string | null) {
    if (message) {
        message
    }
}
const foo = {
    x: [1,2,3],
    bar: {
        name: 'Fred'
    }
};

// Item7: Think of Types as Sets of Values

// const x: never = 12;
// ~ Type '12' is not assingable to type 'never'

