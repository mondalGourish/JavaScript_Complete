//global scope
let a = 300
const b = 400

if(true){
    //block scope
    let a = 50
    let b = 100
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)

//block scope is basically what we can access inside the block whereas global scope is what we can access all over the code


//concept of score and the error that it gives
function one(){
    let name = "Gourish"
    function two(){
        let title = "Mondal"
        console.log(name + title)
    }
    // console.log(title) //error
    two()
}
// console.log(name) //error
one()

//Hoisting is another concept which is studied in the next parts