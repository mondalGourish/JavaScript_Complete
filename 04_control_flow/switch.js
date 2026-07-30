//syntax of switch case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("No match")
        break;
}
//like integer we can also use string for comparison in case
//and if there is no break statement between the cases, then wherever the case match after that everything is printed before default.
//default is only printed if it doesn't get matched with any case 