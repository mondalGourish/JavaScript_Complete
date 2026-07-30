//for loop (ctrl+d -> shortcut to  make multiple changes of same thing)
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log(`${i},Yeah lucky number`)
    }
    // console.log(i);
    
}

//nested loops
for (let i = 1; i <= 5; i++) {
    // console.log(`Outer loop value ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`)    
    }
    
}

//loops in array
let myArr = [0,1,"abc",3,4,"efg"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
    
}

//break and continue
for (let i = 0; i <= 20; i++) {
    if(i == 5 || i == 10){
        // console.log(`${i} detected`) 
        continue; //basically skips the number 
    }
    if(i == 19) break; //breaks the loop and does't print further
    console.log(i)
    
}

//for copy paste shortcut --> alt + shift + down_arrowKey