 //callbacks function
const cal = (a,b,operation) =>{
    return operation(a,b);
}

const addition = cal(2,3,function (num1,num2){
    return num1+num2;
})

const subtraction = (a,b) => a-b;

const subResult = cal(2,1,subtraction);

// console.log(addition);
// console.log(subResult);


//callback hell with an example of making pizza 
// function getCheese(callback) {
//     //setTimeout is an asynchrous function.
//     setTimeout(()=>{ 
//         const cheese = "🧀";
//         callback(cheese);
//        // return cheese; // It can't work so we should use callbacks
//     },2000);
// }
// function getDough(cheese, callback){
//     setTimeout(() => {
//         const dough = cheese + "🥛"
//         callback(dough);
//     }, 2000);
// }
// function readypizza(dough, callback){
//     setTimeout(() => {
//         const pizza =  dough + "🔥"
//         callback(pizza);
//     }, 2000);
// }

//callback hell 👹
// getCheese((cheese)=>{
//     getDough(cheese,(dough)=>{
//         readypizza(dough,(pizza)=>{
//         console.log("Here is your pizza ready sir", pizza);
//         })
//     })
// })


//promises in Js ex 1

// Example: Simulating an asynchronous operation with a promise

// Function that returns a promise
// function simulateAsyncOperation(success) {
//     return new Promise((resolve, reject) => {
//       // Simulating an asynchronous operation (e.g., fetching data from a server)
//       setTimeout(() => {
//         if (success) {
//           resolve('Operation completed successfully!');
//         } else {
//           reject('Operation failed!');
//         }
//       }, 2000); // Simulating a 2-second delay
//     });
//   }
  
//   // Using the promise
//   simulateAsyncOperation(true)
//     .then((result) => {
//       console.log(result); // Output if the operation is successful
//     })
//     .catch((error) => {
//       console.error(error); // Output if the operation fails
//     });
  
//promises in Js ex 2
// const ticket = new Promise((resolve,reject) => {
//     const isBoarded = false;
//     if(isBoarded){
//         resolve("You have flight next week")
//     }else{
//         reject("Your flight has been cancelled!")
//     }
// })

// ticket.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })
// .finally(()=>{
//     console.log("Everytime it executes");
// })


//Resolving callback hell using promises 
function getCheese() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        const cheese = "🧀";
        resolve(cheese);
    },2000);
})
}

function getDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            const dough = cheese + "🥛";
            resolve(dough);
        },2000);
    })
}

function readypizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            const pizza = dough + "🔥";
            resolve(pizza);
        },2000);
    })
}

//using then,catch and finally 
// getCheese().then((cheese)=>{
//     console.log("Here is your cheese", cheese);
//     return getDough(cheese);
// }).then((dough)=>{
//     console.log("Here is your dough", dough);
//     return readypizza(dough);
// }).then((pizza)=>{
//     console.log("Here is your pizza", pizza);
// }).catch((data)=>{
//     console.log("error",data);
// }).finally(()=>{
//     console.log("Process Ended!")
// })

//Instead of using all then and catch and finally, we could have used async and await used on the promises

//making async function named getCheese()

async function getPizza(){
    try{
    const cheese = await getCheese();
    console.log("Get your cheese",cheese);

    const dough = await getDough(cheese);
    console.log("Get your dough",dough);

    const pizza = await readypizza(dough);
    console.log("Get your pizza",pizza);
}catch(error){
    console.log("Error occured", error);
}
console.log("Process Ended!")
}
getPizza();