let name = "Gourish"
let age = 22
console.log(name + " " + age); //this is the basic way and not a good a better way is by using string interpolation

//string interpolation
console.log(`My name is ${name} & i am ${age} years old.`)

//declaring string using new keyword, by using string with new keyword it is formed as a object and the characters are stored in key value pairs
console.log("\n")
const getName = new String("Gourish_Mondal")

//methods of strings
console.log(getName.length);
console.log(getName[1]);
console.log(getName.toUpperCase());
console.log(getName[5].toUpperCase());
console.log(getName.toLowerCase());
console.log(getName.charAt(6))
console.log(getName.indexOf('M'))

console.log("\n")

//some more methods
const getName1 = getName.substring(0,4)
console.log(getName1)

const getName2 = getName.slice(0,4)
console.log(getName2)

const getName3 = getName.slice(-14,12) //prints from backward
console.log(getName3)

const n = "   Gourish    "
console.log(n.trim())

const url = "https/gourish/gourish%10company.com"

console.log(url.replace('%10', '-'))

if(url.includes('copany')){
    console.log(true)
}else{
    console.log(false)
}

console.log('\n')

const gf = "random girl-in my dreams & not in-reality"
console.log(gf.split(' '))
console.log(gf.split('-'))

let str1 = 'a'
let str2 = 'b'
console.log(str1.concat(str2))








