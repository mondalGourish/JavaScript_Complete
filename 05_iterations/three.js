//for of loop

//implementation in array
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

//implementation in string
const greeting = "Hello World"
for (const greet of greeting) {
    if(greet.includes(" ")) continue;
    console.log(greet)
}

//maps in js
//duplicate entries are not allowed and order of entry is preserved
const map = new Map()
map.set("IN", "India")
map.set("SL", "Sri lanka")
map.set("UN", "United Nation")
map.set("USA", "United States Of America")

console.log(map)

//for of loop in map
for (const [key,value] of map) {
    console.log(key, "=>", value)
}


//but in case of object for of loop is not iteratable

