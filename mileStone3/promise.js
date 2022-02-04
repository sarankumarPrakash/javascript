// promise => A promise is asynchronous ,action may be complete at some point in the future and produce a value

// promise state :
//      1. progress
//      2.fulfill
//      3. reject

// syntax :

//      let task=new Promise(function(resolve,reject){
//         //  perform some task
//      })


let result=new Promise(function(resolve,reject){
mark=6;
if(mark>40){
    resolve();
}
else reject();
})
.then(function() {
    console.log("you pass")
})
.catch(function () {
    console.log("you fail");
})

// console.log(result)