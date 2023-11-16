// Logical Operators
// what do you expect each line to print?
console.log(true && false); // fasle
console.log(true || false); // true
console.log(!true); // false
console.log(!(true && false)); // true
console.log(false || !false); // true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); //null
console.log(!``); //true
console.log(!(1 && "false")); // false
console.log(NaN || !"true"); // false

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...



let age = 40

if (age > 10) { // "full menu" if the age is over 10,
    console.log("full menu")
} else { // and "kids menu" if the age is less than 10
    console.log("kids menu")
}


// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

if (num || !num) { // Write your if statement here *
    console.log("The nubmer is zero")
}
