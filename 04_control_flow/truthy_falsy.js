// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//check is an array is empty or not
const userData = [];
if(userData.length === 0){
    console.log("Array is empty")
}

//check is an obj is empty or not
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}

//things to remember
//false == 0 ? --> true
//false == '' ? --> true
//0 == ''? --> true

// Nullish Coalescing Operator (??): null undefined
//basically used in database related operations
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //takes the first value
console.log(val1)


//ternary operator

//condition ? true:false

let age = 20
age >= 18 ? console.log("Can vote") : console.log("Can not vote")