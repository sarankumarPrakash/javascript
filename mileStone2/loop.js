// loop :  // iterate the element in fixed number of times 
//  1. do while
//  2. while
//  3.for 
// 4. for in / for of
//  5. for each


// do while :  // first execute the loop once then it check the condition 

// syntax : 

// do {

// }while (condition)


// while : // it execute only if use number of iteration is not known 

// syntax :

// while (condition) {
    
// }

// for loop :  // it execute when the inital and final iteratable value is known 

// for (let value ; condition; iteration ) {

// }



// for in : // it mainly used in object iteration 
var obj = {a: 1, b: 2, c: 3};

for (i in obj){
    console.log(`obj ${i}:${obj[i]}`)
}



// for of => used for array 

let value=[1,2,3]
for(const i of value){
    
    console.log(`${i-1} : ${value[i]}`)
}