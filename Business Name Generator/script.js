/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/


let random = Math.random();
console.log(random)
let first, second, third;

//For first no.
if(random<0.33){
    first = "Crazy";
}
else if(0.33<=random && random>0.66){
    first = "Amazing";
}
else{
    first = "fire"
}

//For second no.
if(random<0.33){
    second = "Engine";
}
else if(0.33<=random && random>0.66){
    second = "Foods";
}
else{
    second = "Garments"
}

//For third no.
if(random<0.33){
    third = "Bros";
}
else if(0.33<=random && random>0.66){
    third = "Limited";
}
else{
    third = "Hub"
}

console.log(`Your business name would be: ${first} ${second} ${third}`);