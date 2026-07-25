const marvel = ["thor", "hulk", "ironMan"];
const dc = ["superman", "batman", "flash"]

// marvel.push(dc) //creates the 2nd array as a whole element inside the prev array
// console.log(marvel) //[ 'thor', 'hulk', 'ironMan', [ 'superman', 'batman', 'flash' ] ]

//better way is to use concat
// const allHero = marvel.concat(dc)
// console.log(allHero) //[ 'thor', 'hulk', 'ironMan', 'superman', 'batman', 'flash' ]

//another way of doing is using spread
const heros = [...marvel, ...dc]
console.log(heros) //[ 'thor', 'hulk', 'ironMan', 'superman', 'batman', 'flash' ]


//if there is nesting of arrays inside arrays and we want them inside a a single array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //infinty -> depth of array we want the spreading 
console.log(real_another_array); 
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/


//is this an array?
console.log(Array.isArray("Gourish")) //false
//convert it into an array
console.log(Array.from("Gourish"))
/*[
  'G', 'o', 'u',
  'r', 'i', 's',
  'h'
]*/

//converts the elements into an array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//useful methods of arrays