//Strings

let i = "Array"
console.log(i[0])
console.log(i[1])
console.log(i[2])
console.log(i[3])
console.log(i[4])


console.log(i.length) //Length of the string . length is a property

//Template litreals
let f_name = "Parvindar"
let l_name = "singh"

console.log(`My name is ${f_name} ${l_name}`)

//Escape Sequence Characters

let a = "\"Hi\""
let b = `"Hi"`
let c = "Parvindar's \n code"
let d = "Stay away \tfrom me"
let e = "Hey \r hello"
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

//String methods and properties
console.log(f_name.toUpperCase());
console.log(f_name.toLowerCase());
console.log(f_name.toUpperCase());
console.log(f_name.slice(2,4));
console.log(f_name.slice(2));
console.log(f_name.replace("Parvindar","Programmer")) // new string is formed
console.log(f_name.replace("","Programmer")) // new string is formed
console.log(f_name.replace("rv","Programmer")) // new string is formed
  
console.log(f_name.concat(l_name, "coder")) // new string is formed

let trimString = "  JohnDoe  "
console.log(trimString.trim()) // new string is formed

console.log(f_name) //f_name named string is immutable means one can't change the content of a string once it is declared


//Excercise 4

//que 1
console.log("har\"".length)

//que 2
console.log(f_name.includes("PARVINDAR"))
console.log(f_name.startsWith("Pa"))
console.log(f_name.endsWith("ar"))

//que 3
console.log(l_name.toLowerCase());

//que 4
let statement = "Please give Rs 1000"

console.log(statement.slice(15,19))

//que 5
let strNum = "123HelloWorld456789";

let strNum2 = strNum.replace("H","M")

console.log(strNum2);