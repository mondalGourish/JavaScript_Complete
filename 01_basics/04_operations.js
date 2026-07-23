let val = 3;
let negVal = -val;
console.log(negVal);

let str = "hello"
let str1 = " gourish"
let str2 = str + str1
console.log(str2);

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + "2" + "2"); //122
console.log("1" + 2 + "2"); //122
console.log(1 + 2 + "2"); //32

console.log(+true) //1
console.log(+"") //0

//preincrement and postincrement
let x = 3; //x => 3
const y = x++; //y => 3 and after assigning y 3, x++ that means the value in x got updated and not x=>4

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3; //a => 3
const b = ++a; //the b value assigned as 4 , b=>4, then a value also got updated a=>4

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



