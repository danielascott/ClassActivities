// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let x = 1;
// 2) create a variable to represent the current total
let total = 0;
// 3) write a while loop that sums the numbers from 1 to 100
while (x <= 100) {
    total = total + x;
    console.log(x);
    
    x++;
}
console.log(total);

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
total = 0
for (let y = 1; y <= 100; y++) {
    total = total + y
    console.log(y);
  }
console.log(total);