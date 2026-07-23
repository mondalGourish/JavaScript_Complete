//hoisting


// var x = 7;
// function getName(){
//     debugger;
//     console.log("Gourish");

// }

// getName();
// console.log(x);
// console.log(getName);
const x = 10;
a();
b();
console.log(x);



function a(){
    let x = 11;
    console.log(x);
}
function b(){
    let x = 20;
    console.log(x);
}
