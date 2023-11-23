// create an Array using an Array literal

const trucks = ["ford", "chevy", "dodge"];

// access the 1st item in the Array

console.log(trucks[0]);

// access the last item in the Array

console.log(trucks[2]);

// print the length of the Array

trucks.length;

// use the length property to access the last item in the Array

console.log(trucks[trucks.length - 1]);  // essentially 3 - 1 , which shows the dodge because dodge is technically 2

// with for...of, loop over the Array, modify the value and add to a different Array