// create an Array using an Array literal

const trucks = ["f-450", "f-250", "dodge"];

// access the 1st item in the Array

console.log(trucks[0]);

// access the last item in the Array

console.log(trucks[2]);

// print the length of the Array

trucks.length;

// use the length property to access the last item in the Array

console.log(trucks[trucks.length - 1]);  // essentially 3 - 1 , which shows the dodge because dodge is technically 2

// with for...of, loop over the Array, modify the value and add to a different Array

const cars = [];

for (let vehicle of trucks) {
    let output = "ford ${vehicle}"; // this will put ford infront of the arrays .. f450, f250, etc. 
    let output = vehicle.toLowerCase(); // this will make all the arrays lower case ..
    cars.push(output);
}

// --------------------------------------------------------------------------------------------

const movie = {
  id: "tt0084787",
  title: "The Thing",
  rating: "R",
  year: 1982,
  director: "John Carpenter",
  cast: [
    "Kurt Russell",
    "Keith David",
    "Wilford Brimley",
  ],
  musicBy: "Ennio Morricone",
}

for (let member of movie.cast) {
    console.log(member)  // this will display all cast members
}

movie[0] // this will display the id.


