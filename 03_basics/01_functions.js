//function declaration
function sayHi(){
    console.log("H")
    console.log("I")
    console.log("!")
}
//function reference
//sayHi
//function execution
sayHi()

function add(num1, num2){ //num1,num2 are parameters
    console.log(num1+num2)
}
// add(3,4) //3 and 4 are arguments passed to the function call
const result = add(3,4)
console.log(result) //undefined -> as sum was never returned it is just printed inside the function

function add1(num1, num2){ //num1,num2 are parameters
    const sum = num1+num2
    return sum
}
const sum = add1(3,7)
console.log(sum) //10 -> it prints the sum as it is being returned from the function


function loginMessage(username){
    if(!username){
        console.log(`Please enter a username`)
        return
    }
    return `${username} has logged in`
}
console.log(loginMessage('Gourish'))

/*we are passing limited parameters to the function, but what if we need to pass more than 2 or 3 parameters,
For this case we use rest operator(...num1) it basically takes as many as parameters possible and returns them*/

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,800,50,10,45))

//another case
function calPrice(val1,val2,...num1){
    return num1
}
console.log(calPrice(100,200,300,400)) //[ 300, 400 ] as 100 and 200 are stored in val1 and val2 respectively


//accessing objects using function
const user = {
    name : "Gourish",
    price: 100
}
function getUser(anyobject){
    console.log(`Username is ${anyobject.name} & price is ${anyobject.price}`)
}
// getUser(user)
//other way
getUser({
    name: "sam-altman",
    price: 500
})


//accessing arrays using function
const myNewArr = [100,200,300,400]

function getArr(myArr){
    return myArr[1]
}
console.log(getArr(myNewArr))
console.log(getArr([100,600,800]))