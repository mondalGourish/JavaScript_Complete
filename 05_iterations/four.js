//for objects we use for in loop
const myObj = {
    1 : "js",
    2: "java",
    3: "html",
    4: "css"

}
for (const key in myObj) {
    console.log(`${key} --> ${myObj[key]}`)    
}

//for arrays
let newArr = [1,2,3,4,5,6]
for (const key in newArr) {
    // console.log(key)//prints the key 
    console.log(`${key} --> ${newArr[key]}`)
}

//we can not use for in loop in maps as maps are not iterateble