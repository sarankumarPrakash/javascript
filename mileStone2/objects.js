// objects => collection of named values

let object ={
    name:"jaavscript",
    code :98,
    address:"fryukm"
}
// console.log(object)



// By object literal
// By instance of Object
// By Object constructor


// object Literal

//    it is like traditional decleartion 

   let object1 ={
    name:"jaavscript",
    code :98,
    address:"fryukm"
}



// By instance of Object

//   it is like create using new keyword

  var object2 =new Object();
  object2.id="ertt",
  object2.name="value",

console.log(object2)


// By Object constructor

function emp(id,name,salary){
    this.id=id,
    this.name=name,
    this.salary=salary
}
let object3=new emp(103,"Sonoo Jaiswal",30000); 
console.log(object3.id+" "+object3.name+" "+object3.salary);


// it can access through dot and bracket notation

console.log(object.name, "name") // using dot operation , most preferable once 

 console.log(object['name'])// using bracket opeartion
