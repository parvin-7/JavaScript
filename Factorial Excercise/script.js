//factorial of a number using reduce

let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1).reduce((a,b) => a*b)
    return c
    // console.log(arr)
}

console.log(factorial(a));
// console.log(c)


//factorial of a number using for loop

let b = 5;

function facFor(number){
    let fact = 1;
    for (let i = 1; i < number+1; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(facFor(b));

const uninitializedArray = Array(5);
console.log(uninitializedArray); // Output: [ <5 empty items> ]

const array = [10, 20, 30];
const keysIterator = array.keys();

for (const key of keysIterator) {
  console.log(key);
}