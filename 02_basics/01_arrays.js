//declaration of arrays and printing

const arr = [0,1,2,3,4]
console.log(arr[1])
const hero = ["ironMan", "superMan", "batman", "thor", "hulk"]
for(let i=0; i<hero.length; i++){
    console.log(hero[i])
}
const myArr = new Array(0,1,2,3,4)
console.log(myArr[myArr.length-1])

console.log(myArr)

//array methods
myArr.push(6) //adds at the last of the array
console.log(myArr)
myArr.pop();//deletes from the last
console.log(myArr)
myArr.unshift(9)//adds at the first
console.log(myArr)
myArr.shift()//deletes from the first
console.log(myArr)


console.log(myArr.includes(9))
console.log(myArr.indexOf(4))

//convert array to string
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice and splice

console.log("A", myArr) //A [ 0, 1, 2, 3, 4 ]

//slice
const myNewArr = myArr.slice(1,3) //takes the elements from starting index to ending index-1
console.log(myNewArr) //[ 1, 2 ]
console.log("B", myArr) //B [ 0, 1, 2, 3, 4 ]

//splice
const myNewArr1 = myArr.splice(1,3) //takes out the elements from the starting index upto ending index returns a new array and the previous array is also changed
console.log(myNewArr1) //[ 1, 2, 3 ]
console.log("C", myArr) //C [ 0, 4 ]
