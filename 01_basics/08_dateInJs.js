//date is a object in javascript
//javascript store dates in milliseconds since jan 01, 1970
let date  = new Date()
console.log(date) //2026-07-24T10:25:44.232Z
console.log(date.toDateString()); //Fri Jul 24 2026
console.log(date.toISOString()); 
console.log(date.toLocaleDateString()); //24/7/2026
console.log(date.toJSON());
console.log(typeof date) //object

//ways to create date 
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

//timestamp
let timeStamp = Date.now()
console.log(timeStamp) //1784888971673 //in milliseconds
console.log(myCreatedDate.getTime())

console.log('\n')
let newDate = new Date()
console.log(newDate.toLocaleDateString()); //24/7/2026
console.log(newDate.getMonth() + 1); //7 //month ->july
console.log(newDate.getDay()); //5 //day -> friday