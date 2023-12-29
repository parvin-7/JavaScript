//functions
function myfunc(name){
    console.log("Hey " + name + "! How are you?");
}
myfunc("Parvindar")

//function for sum of 2 no

function sum(a,b){
    // console.log(a+b)
    return a+b
}

console.log(sum(3,5))

function mul(a , b=3){
    return a*b
}

result1 = mul(4)
result2 = mul(4,5)

console.log("Result1 is:", result1)
console.log("Result2 is:", result2)

//Arrow functions
const div = (a,b)=>{
    return a/b;
}

console.log(div(15,3));

//Excercise 3
//que 4
function mean(a,b,c,d,e){
    return (a+b+c+d+e) / 5;
}

console.log("Mean of numbers is:", mean(3,2,5,6,8));