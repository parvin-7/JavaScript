let array = [1,2,4,5,6]

console.log(array)
console.log(array.length)

console.log(array[2])
console.log(array[0])

array[1] = 34;
console.log(array)
console.log(typeof array)

//toString()

console.log(array.toString())

//join()

console.log(array.join("_"))

//pop()

// console.log(array.pop())

//push
 console.log(array.push(0))

//shift
console.log(array.shift())

//unshift
console.log(array.unshift(45))

//delete 
// delete array[0]

// console.log(array)

//concat
let array2 = [21,22,23,24,25,26]
let array3 = [32,27,31,28,29,30]
let array4 = array.concat(array2,array3)

console.log(array4)

//sort
console.log(array4.sort())

//sort method with compare function
console.log(array3.sort(function(a,b){return a-b}))

//splice method
console.log(array2.splice(3,1,35,36))

console.log(array2)

//splice method
console.log(array2.slice(2))



//reverse method
// console.log(array3.reverse()) //modifies the array

//for each loop

array3.forEach((value,index,arr) =>{
    console.log(value, index, array3)
})

//for in loop
let obj = {
    a:2,b:4,c:6
}

// console.log(typeof obj)

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}


//for of loop
for (const i of array3) {
    console.log(i)
}

//map 
let a = [2,3,4];
let b = a.map((e)=>{
    return e+2;
})

console.log(b)

//filter method
const c = [2,4,5,8]

const mulof2 = (e) =>{
    if(e%2==0){
        return true;
    }
    return false;
}

console.log(c.filter(mulof2))

//reduce method

let e = [578,392]
const sum2 = (a,b) =>{
   return a+b;
}

let sum = e.reduce(sum2)

console.log(sum)

console.log(Array.from("Parvindar"))

//fill method

const list = [1,2,3,4,5]

// console.log(list.fill(0))

//indexOf()

console.log(list.indexOf(5))

// lastindexof

const list1 = [2,3,4,7,1,2]

console.log(list1.lastIndexOf(2));
 
//findIndex

console.log(list1.findIndex(number => number % 2 === 0));

//includes

console.log(list1.includes(0))

//some()

console.log(list1.some(n => n % 2 === 0))

//every()

console.log(list1.every(n => n % 2 === 0))

//Array.from()

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(range(10));

//Array.of()

const list2 = Array.of(1,2,3,4,5)

console.log(list2);

//isArray()

console.log(Array.isArray([1,2,3,4,5,0]))

//isAt()

console.log(list2.at(0))

//copyWithin()

console.log(list2.copyWithin(3,0,2))