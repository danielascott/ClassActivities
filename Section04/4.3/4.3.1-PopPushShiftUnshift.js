const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastNumber = nums.pop();
console.log(lastNumber);
let nextToLastNumber = nums.pop();
console.log(nextToLastNumber)

// remove each of the first two items with shift(), saving each item to a variable
let firstNumber = nums.shift();
console.log(firstNumber);
let secondNumber = nums.shift();
console.log(secondNumber);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(secondNumber)
nums.push(firstNumber)

nums.unshift(lastNumber)
nums.unshift(nextToLastNumber)

console.log(nums)