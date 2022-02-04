
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

// filter 

let value =data.filter((value)=>{
    return value>5
})
console.log(value)

// map  

let marks =[45,67,23,32,78,99.56]
 let results=marks.map((value)=>{
     return value>40?"pass":"fail"

 })
 console.log(results)

//  reduce  
const array1 = [1, 2, 3, 4];  
const reducer = array1.reduce((prev,cur)=>{
    return(cur+prev)
})
console.log(reducer)

// reduce for object 

let obj=[
    { id:1,name:"chip",cost:10},
    { id:2,name:"chip",cost:20},
    { id:3,name:"chip",cost:30},
    { id:14,name:"chip",cost:40},
]

let fresult = obj.reduce((prev,cur)=>{
    return prev+cur.cost
},0)
   console.log(`your final cost : $ ${fresult}`)