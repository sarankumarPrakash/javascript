// typeconversion => convert one form of dataType into another datatype 
// 1.Number => String
// 2.string => Number
// 3.NUmber => Date
// 4. Date => Number
// 5. Boolean => number 
// 6. Number => boolean



// string to Number

let x="4",X=4
let Y =Number(x) // => string to Number 
let y=X.toString('')  //  => number to string
console.log(typeof(Y),typeof(y))

// date to number and string 

let date=new Date()
console.log(date)   // output =>  Mon Jan 24 2022 23:58:13 GMT+0530 (India Standard Time)   
let numDate=Number(date)  //1643048893712
let stringdate=date.toString('')  //op =>" Mon Jan 24 2022 23:58:13 GMT+0530 (India Standard Time)"
console.log(typeof(numDate), typeof(stringdate))  // op => number , string 
let DateNum=Date(1404568020739) // op => "Tue Jan 25 2022 00:08:00 GMT+0530 (India Standard Time)"   => it always return string format 


// boolean to number and string 

let boolNum=Number(false)  //  output => 0 
let boolString =String(true) // output => "true"
let numbool=Boolean(3) // output  expect zero all comes true and string type there is no false  




//  Note :
// With type conversion object to array and array to object is not possible we cn done it through code 