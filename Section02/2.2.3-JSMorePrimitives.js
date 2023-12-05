// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "afternoon"
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}, my friend`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVar;
// Print the new variable and its type
// What type should we expect?
console.log(newVar, typeof newVar);
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVar = null;
// Print the variable and its type again
// What type should we expect?
console.log(newVar);
// Try to print a variable that does not exist
// What should we expect to print in the CLI? This is what was given back.

// ReferenceError: noexist is not defined
// at Object.<anonymous> (/home/danielascott/Documents/Savvy Coders/ClassActivities/Week2/2.2.3-JSMorePrimitives.js:21:13)
// at Module._compile (node:internal/modules/cjs/loader:1256:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
// at Module.load (node:internal/modules/cjs/loader:1119:32)
// at Module._load (node:internal/modules/cjs/loader:960:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:86:12)
// at node:internal/main/run_main_module:23:47

console.log(noexist)
// Print "greeting" again
// Will this line run?
console.log(greeting)