//how to make objects singleton or declare with the help of constructors
// const user = new Object()
// console.log(user)

const tinderUser = {}
tinderUser.id = "123ABC"
tinderUser.name = "Sham Babu"
tinderUser.age = 19
console.log(tinderUser)

//nesting of objects
const user1 = {
    email : "user1@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Gourish",
            lastName : "Mondal"
        }
    }
}
console.log(user1)
console.log(user1.fullName.userFullName.firstName)

//merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4)

//another way
const obj5 = {...obj1, ...obj2}
console.log(obj5)

//methods used for objects in operation with database
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//to check if the object has a property or not
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //false
console.log(tinderUser.hasOwnProperty('age')) //true

const course = {
    courseId : 1,
    courseName : "web dev",
    courseChannel : "chai aur code",
    subject : "JavaScript"
}

//destructuring of object
const {subject : sub} = course
console.log(sub)

//Basically all these knowledge will be used in time of learning response from api

//api gives response in JSON format and for complex JSON response we can use the website "JSON formatter" to understand the response