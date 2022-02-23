// function : // reusable set of code  by simply call by the name 

// 1. Named function 
// 2. self invoke function 
// 3. call back 
// 4. arrow
// 5. annonymous 
// 6.closure Function 



// Named Function 

//    function that hold name  eg  function sum(a,b) => in this sum is a name hence it called as named function

    function sum (a, b) { // named function 
    return a + b;
}
sum(2,3)

// or 

let data= function sum(a,b){
    return a+b
}

data(2,3)



// annonymous function 

let data= function (a,b){ // in this follow  after function there is no name declare hence it is annouymous function 
    return a+b
}

data(2,3)


//   self invoke function  => a function call itself is called as self invoke function 


(function selfInvoke(a,b){
    console.log(a,b)
})();


// call Back function  => a function pased into another function as parameter 


function main(subFun){
    console.log("main function executed")
    subFun()
}
function subFun(){
    console.log("sub function called")
}
main(subFun)


// arrow function => it is Introduced in ES6 , it help to write function in shorter 


function sum (a, b) {  //   => function  call traditional way  
    return a + b;
}
sum(2,3);


(a,b)=>a+b // => arrow function 

sum(2,3)


// Additional NOTE :
 
// closure 

//  A inner function access any value from the oure function is termed as closure function

 function outer(){
     let value=9;
  inner();
 function inner(){
     return value+10;
 }

 console.log(calculation) 
 }
 console.log(outer());