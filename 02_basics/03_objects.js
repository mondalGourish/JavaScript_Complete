//objects can be declared by two types 1. by literals 2. by constructors

//when we use constructor to create an object then it becomes a SINGLETON but in case of object literals multiple instances of the object are created

//singleton
//Object.create

//declaring symbol
const mySym = Symbol("Key")
console.log(typeof mySym)

//object literals declaration
const jsUser = {
    name : "Gourish",
    "full_name" : "Gourish Mondal", //this is another way of declaring key value pair in object
    age : 20,
    city: "Chandannagar",
    marks : [80,75,90],
    [mySym] : "myKey1", //way to access symbol inside an object
}

//how to access object
console.log(jsUser.name);
console.log(jsUser["full_name"])//another way of accessing other than .operator
console.log(jsUser[mySym])
console.log(jsUser)

//changes in object
jsUser.age = 23
console.log(jsUser)
// Object.freeze(jsUser) //if this is applied means no further changes cant be done to this object

jsUser.name = "hooghly"
console.log(jsUser) //no changes is applied the previous object is printed

console.log("\n")
//function
jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.full_name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


