let random = Math.random()
console.log(random)
let a = prompt("Enter first no: ")
let c = prompt("Enter the operation:")
let b = prompt("Enter second no: ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if(random > 0.1) {
    //Right calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}

else{
    //Faulty calculator
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}