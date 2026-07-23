/*
How data is stored in memory and accessed, upon that it is divided into two parts

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

       These are formed in STACK memory, for any changes performed in the datatypes we get a copy

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object 
       
       These are HEAP memory, any manipulation in these makes changes in the actual memory
       */

//memory
let name = "Gourish"

let anotherName = name
anotherName = "rupam"

console.log(name)//takes reference from the name
console.log(anotherName)//gets the copy of name actual name remains intact & changes done in another name

let usr1 = {
       name:"Gourish",
       id: 123,
}
let usr2 = usr1

usr2.name = "Mondal";
//as the reference to the object is same for both usr1 and usr2 changes in the object reflect for both the user
console.log(usr1.name)
console.log(usr2.name);

