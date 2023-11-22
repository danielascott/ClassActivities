// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function myFunction(param1, param2) {
    console.log(param1, param2)
    return param1 + param2;
}

// invoke the function and pass in two numbers

myFunction(32,43)
console.log(myFunction(32,43)); //console log only needed now to view return

// invoke the function and pass in more than two numbers

myFunction(44,35,63,23)
console.log(myFunction(44,35,63,23)) //console log only needed now to view return

// invoke the function and pass in only one number

console.log(myFunction(4)) //console log only needed now to view return

// change the function to set default values for the parameters

function myFunctiondefaultpara(param1 = 4, param2 = "apple") {
    console.log(param1)
    console.log(param2)
    return myFunctiondefaultpara;
}

// again, invoke the function and pass in only one number

myFunctiondefaultpara(6)

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function myFunctionrestoper(param1, ...param2){
    console.log(param1, myRestParam);
}

// again, invoke the function and pass in more than two numbers

myFunctionrestoper(3, 7, 9)