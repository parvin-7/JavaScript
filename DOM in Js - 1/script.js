// console.log(document.title = "DOM in Js")
// console.log(document.body);
// document.body.style.backgroundColor = "Red"

//Excercise 6
//que 1
let age = prompt("Please Enter Your Age:")

//que 3
if(age<0){
    console.error("Sorry! You entered wrong value.")
}
//que 4
else if(age>4 && age <18){
    location.href = "https://www.google.com"
}
else if(age>=18){
    alert("You can drive")
}
else{
    alert("You can't drive")
}

//que 2
confirm("Do you want to see the prompt again?")

//que 5
let confirmed = confirm("Do you want to change the background color of this page?");

if(confirmed){
    let color = prompt("Which color would you prefer for your page?");
    color = color.toLowerCase();
    if(color === "red"){
        document.body.style.backgroundColor = "red";
    }
    else if(color === "yellow"){
        document.body.style.backgroundColor = "yellow";
    }
    else if(color === "purple"){
        document.body.style.backgroundColor = "purple";
    }
    else {
        alert("Invalid color choice. The background color remains unchanged.");
    }
}