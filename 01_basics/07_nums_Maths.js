//Numbers
//normal declaration of number
const score = 400
console.log(score)

//strict declaration of number
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //100.00

const otherNum = 123.4567
console.log(otherNum.toPrecision(4))

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'))

//Maths
console.log(Math.abs(-4)) //4
console.log(Math.round(4.3)) //4
console.log(Math.floor(4.7)) //4
console.log(Math.ceil(4.1)) //5
console.log(Math.max(-4, -3 , -2 , -1))
console.log(Math.min(-4, -3 , -2 , -1))

console.log('\n')

//random value(value lies between 0 and 1)
let a = Math.random()
console.log(a)
let b = a*10 + 1 //to avoid cases like 0.04
console.log(b)
let c = Math.round(b)
console.log(c)

let min = 10
let max = 20

let random = Math.floor(Math.random() * (max-min+1) + min)
console.log(`The random value between ${min} and ${max} is ${random}`)



