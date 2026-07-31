//reduce method
const myNum = [1, 2, 3];
//using function
// let newMyNum = myNum.reduce(function (accumulator, currVal) {
//   console.log(`acc: ${accumulator}, currVal: ${currVal}`);
//   return accumulator + currVal;
// }, 0); //0 -> initial value
// console.log(newMyNum)

//using arrow function
let newNum = myNum.reduce((acc, currval) => acc + currval, 0);
console.log(newNum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc+item.price,0 )
console.log(totalPrice)