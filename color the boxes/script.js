// let e = document.childNodes[1].childNodes[2].childNodes[1]

// e.childNodes[1].style.backgroundColor = "red"
// e.childNodes[3].style.backgroundColor = "yellow"
// e.childNodes[5].style.backgroundColor = "green"
// e.childNodes[7].style.backgroundColor = "blue"
// e.childNodes[9].style.backgroundColor = "purple"


// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

let boxes = document.querySelector(".container").children;

console.log(boxes);

function getRandomBgColor(){
    let var1 = Math.ceil(0 + Math.random()* 255);
    let var2 = Math.ceil(0 + Math.random()* 255);
    let var3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${var1} ${var2} ${var3})`
}
function getRandomColor(){
    let var1 = Math.ceil(0 + Math.random()* 255);
    let var2 = Math.ceil(0 + Math.random()* 255);
    let var3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${var1} ${var2} ${var3})`
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomBgColor();
    e.style.color = getRandomColor();
});