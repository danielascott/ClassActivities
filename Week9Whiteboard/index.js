const sodas = [
    {
        "name": "Pepsi",
        "sugarFree": false,
        "energy": false,
        "image": "fake.cdn/pepsi.jpg"
    },
    {
        "name": "Coke",
        "sugarFree": false,
        "energy": false,
        "image": "fake.cdn/coke.jpg"
    },
    {
        "name": "NOS",
        "sugarFree": false,
        "energy": true,
        "image": "fake.cdn/nos.jpg"
    },
    {
        "name": "Diet Pepsi",
        "sugarFree": true,
        "energy": false,
        "image": "fake.cdn/diet_pepsi.jpg"
    }
]


// let attributeList = [
//     "name",
//     "image"
// ]

// attributeList.forEach(attribute => {
//     const soda = sodas.map(soda => ({ name: soda.name, image: soda.image }));
//     console.log(soda);
//   });

// const soda = sodas.map(curr => {
//     return {name: curr.name, image: curr.image}
// });
// console.log(soda);


let attributeList = [
    "name",
    "sugarFree",
    "energy"
]


// attributeList.forEach(attribute => {
//     const soda = sodas.map(soda => ({ name: soda.name, sugarFree: soda.sugarFree, energy: soda.energy }));
//     console.log(soda);
//   });

// using forEach
sodas.forEach(soda => {
    let output = '';
    attributeList.forEach(attribute => {
        output += `${attribute}: ${soda[attribute]}, `;
    })
    console.log(output);
});

// using array.map
sodas.map(soda=>{
    let output = "";
    attributeList.map((attribute)=>{
        output += `${attribute}: ${soda[attribute]}, `;
    });
    console.log(output);
});

// Using for..of
for (let soda of sodas) {
    let output = "";
    for (let attribute of attributeList) {
        output += `${attribute}: ${soda[attribute]}, `;
    }
    console.log(output);
};

// Using for loop
for (let s = 0; s < sodas.length; s++) {
    let output = '';
    for (let a = 0; a < attributeList.length; a++) {
        output += `${attributeList[a]}: ${sodas[s][attributeList[a]]}, `;
    }
    console.log(output);
}