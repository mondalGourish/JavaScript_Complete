const user = {
    username: "Gourish",
    price: 400,
    welcomeMsg : function(){
        console.log(`${this.username} has loggedIn`)
    }
}
user.welcomeMsg()
user.username = "Mondal"
user.welcomeMsg()

console.log(this)//{} prints an empty object as the global scope is empty, whereas if we do the same thing in browser it will print a window object

//this cannot be used inside function it gives undefined
function hi(){
    let name = "Gourish"
    console.log(this.name) //undefined
    console.log(this) //prints a global object
}
hi()

//arrow function
const hello = ()=>{
    let name = "Mondal"
    console.log(this.name)//undefined
    console.log(this)//{}
}
hello()

//explicit return in arrow function 
const addTwo = (num1,num2)=>{
    return num1 + num2
}
console.log(addTwo(5,5))
//implicit return in arrow function 
const add = (num1,num2) => num1 + num2
console.log(add(7,8))
const add1 = (num1,num2) => (num1 + num2) //this type of syntax is mostly used in react, basically it helps to return any object inside parenthesis ({})
console.log(add1(5,8))