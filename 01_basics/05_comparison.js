
//this type of comparison give us confusion so better to avoid these type where the comparators are of different on both sides
console.log(null > 0)
console.log(null < 0)
console.log(null >= 0)
console.log(null <= 0)
console.log(null == 0)
console.log(null === 0)
//in case of > < == and === they are compared as it is but in case of >= and <= null is converted to number and compared
console.log("\n")

console.log(undefined == 0)
console.log(undefined < 0)
console.log(undefined > 0)

console.log("\n")

//strict check using ===
//basically check value as well as data type

console.log(2 == 2)
console.log(2 === 2)
console.log("2" == 2)
console.log("2" === 2)



