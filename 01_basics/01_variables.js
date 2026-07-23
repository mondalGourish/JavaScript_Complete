//how to declare variables
const id = 1234;
let name = "Gourish";
var email = "gm@gmail.com";
city = "Chandannagar";
let pin; //if something is not declared but value is not given it is considered as undefined

console.log(id);
//changing of const is not allowed
console.table([id,name,email,city,pin]);

//prefer not to use var as because issue in block scope and functional scope