
// array methods 
// 1. sort 
// 2. map
// 3. filter
// 4. reduce 
// 5. find

// sort 
let data=[3,5,20,1,6,8]   
console.log(data, "beforeSort")
console.log(data.sort() , "aftersort")  // => it can sort through ASCII values 

// find  
 let result= data.find((value)=>{       // it shows only the first result , if you want to show all the result we can use fiter method

       return (value>6) 
})
 console.log(result)

// filter => it help  to filter all the value from your applied condition

let value =data.filter((value)=>{
    return value>5
})
console.log(value)

// map  => it help to create new array with calling every array 

let marks =[45,67,23,32,78,99.56]
 let results=marks.map((value)=>{
     return value>40?"pass":"fail"
 })
 console.log(results, "map")
 let table=[1,2,3,4,5]
 let tablemap=table.map((sqre)=>{
     return sqre*sqre
 })
 console.log(tablemap, "tableSqurae")

//  reduce  

const array1 = [1, 2, 3, 4];  // c
const reducer = array1.reduce((previous,current)=>{
    return(current+previous)
})
console.log(reducer,"reduce")

