// for (let index = 0; index < 21; index++) {
//     console.log(index)
// }

// //for in
// let object = {
//     name:"John",
//     Address:"1/2 New-york"
// }
// for (const key in object) {
//    console.log(key)
// }

// //for of
// for (const iterator of "Parvindar") {
//     console.log(iterator)
// }

//while loop
// let a = 3;
// while(a<5){
//     console.log("The value is ",a);
//     a++;
// }

//do while

// let i = 6;
// do{
//     console.log("Value is:",i);
//     i++;
// }while(i<6)

//Excercise 3
//que 1
// let obj = {
//     harry:98,
//     rohan:70,
//     aakaash:7
// }

// let keysArray = Object.keys(obj);

// for (let I = 0; I < keysArray.length; I++) {
//     let key = keysArray[I];
//     let values = obj[key];
//     console.log(`${key}, ${values}`);
// }

//que 2
// for (const i in obj) {
// //   console.log(obj[i])
//  let key = keysArray[i];
// let values = obj[key];
// console.log(`${key}, ${values}`);
// }

// //que 3

let num=32;

function tryagain(){
    if(num == 34){
        console.log("Correct");
    }
    else{
        console.log("Try again")
    }
}

 tryagain();
