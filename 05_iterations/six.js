const lang = ["java", "js", "cpp", "python", "html", "css"]

//for each loops travels and prints but doesnt return anything
const values = lang.forEach( (item)=>{
    // console.log(item)
    return item
})
// console.log(values)

//to solve this we have filter method
let arr = [1,2,3,4,5,6,7,8,9,10]
let val = arr.filter((num)=>{
    // num > 4 //wrong because when we are opening a scope we have to return something
    return num > 4 //actual way
})
let vals = arr.filter( (num)=> num > 4) 
// console.log(vals) //[ 5, 6, 7, 8, 9, 10 ]


//we can return values through for each loop but a length way -->
let newArr = []
arr.forEach((num)=>{
    if(num > 4){
        newArr.push(num)
    }
})
// console.log(newArr)//[ 5, 6, 7, 8, 9, 10 ]

//how operations in database looks like
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((bk)=> bk.genre === "Non-Fiction")
  userBooks = books.filter((bk)=>{
    return bk.genre === "Science" && bk.publish >= 2009
  })
  console.log(userBooks)