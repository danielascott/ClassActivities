// this uses the while loop to try and find the highest number
function findHighest(...numbers) {
    let highest=0;
    let i=0;
    while(i<numbers.length){
      if(numbers[i]>highest){
        highest=numbers[i];
      }
      i++;
    }
  return highest;
    
  }
  
  let highestnumber = findHighest(-4, 30,4,8,20,-6,300,150);
  console.log(highestnumber);



// this uses the sort function to find the highest number
  let integer = [18, 33, 234, 7, -4, 2];
integer = integer.sort(sorter);
console.log(integer[0]);
function sorter(num, nextNum) {
  if (num > nextNum) return -1;
  else if (nextNum > num) return 1;
  return 0;
}


// Greg Carter7:54 PM
// array of numbers
// function to determin highest num in array
// return highest num in array//



// Toan Dang7:57 PM
// Enter random numbers
// Set highest value to 0;
// Loop through the input numbers
// compare current value with the next value
// If next value > current value
// Set the highest value = next value
// return highest value

// break down the problem
// javascript function that will take integers and spit out the highest one wihtout using math.max. 
