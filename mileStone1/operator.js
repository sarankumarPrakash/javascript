// Operators :
//      1. Arthematic Operators
//      2. Relational Operators
//      3. Assignment Operators
//      4. Bitwise operators
//      5. Ternary Operators
//      6. Logical operator 
//      7. miscellaneous operator 
     


// 1 Arthematic operator 
//   let a=5, b=10
//      +  => let a+b output => 15
//      -  => let b-a output => 5
//      *  => let a*b output => 50
//      /  => let b/a output => 2  let a/b output => 0.5
//      %  => let a%b output => 5 let b%a output => 0

// 2 Relational operator 

//   let a=5, b=10

//   ==  => let a==b output false

//   <=  => let a<=b output true

//   >=  => let a>=b output false

//   <   => let a<b output true

//   >   => let a>b output false

//   !=  => let a!=b output true 


//   let  a=10 ,b="10"
//   console.log(a==b) ==> output as true 

//   in this above example a and b hold same value so it returns as true 


//   let  a=10 ,b="10"
// console.log(a===b)  => output as false 

// here it holds same value with different datatype , a as number  b as string hence it returns false 


// Note :  

//   ==  => it is an comparison operator help to check the variable holds same value but not the data types.

//   === =>it is an comparison operator help to check the variable holds same value but it check  the data types also.




// 3. Assignement operator 

//   = => it help to assign the value to the variable 
//   they are several types of assignment operator 
//   += => it represnt as a=a+b we can written as a+=b. with respect to [-= *= /= %= ].



// 4. Bitwise operators

//    It mostly helpful for bit numbers , we can see later it not mandatory now 

//     bitwise => and , or , not ,XOR , unsignedRight shift , leftshift rightshift </b>



// 5. logical operator 

//   1. logical and => && 
//   2. logical Or  => ||
//   3. logical not => !

//    && => condition A and condition B both come true => it comes true or else it throws false 
//    || => either condition A or condition B comes true => it return as true 
//    ! => if it comes true it return false if it comes as true return false 
// let x=5,y=5
//    (x < 10 && y > 1) => here both condition come true hence it return  true 
//    (x < 10 && y < 1); => false  here first  condition come trueand second condition comes false IN and operatore both comes true as tru else false, hence it return  false 


//    let x=5,y=5
//    (x < 10 || y > 1) => here both condition come true hence it return  true 
//    (x < 10 || y < 1); => true  here first  condition come true and second condition comes false IN OR operatos if anyone come as true , hence it return  true 

//    let x=7,y=6
//   (!(x > y)); => return false because ! turn true to false ; false to true 



//  6. Ternary operator 
//       syntax : (condition?true:false )
//  let x=7 , y=3
//       (x>y)? true : false => here x is greater than y ,condition satisy hence it retun true  



// 7. miscellaneous operator 

//  1. typeof  => it return the which type the value holds 

//   typeof(6) => number
//   typeof("js")=>string 
//   typeof(undefined)=>undefined
//   typeof(5>2)=>Boolean
//   typeof(null)=>Object
//   typeof(array)=>object
//   typeof(function)=>function

//   2. dot operator => it is mainly used in objects . In object if we need to call any key inside object we use dot operator 

//    let contextdata={
//        "invoice":10,
//        "loading":20
//    }
//   console.log(contextdata.invoice) => we are calling like this

//   [we  have some more operator like this new.target and spread operator] 