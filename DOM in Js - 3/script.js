const myObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Exampleville',
      country: 'Exampleland'
    }
  };

  //innerHtml and outerHtml
  console.log(document.querySelector(".container").innerHTML)
  console.log(document.querySelector(".box").innerHTML)

  console.log(document.querySelector(".container").outerHTML)
  console.log(document.querySelector(".box").outerHTML)

  //tagName and nodeName
  console.log(document.querySelector(".container").tagName)
  console.log(document.querySelector(".container").nodeName)

  //textContent
  console.log(document.querySelector(".container").textContent)

  //hidden
// document.querySelector(".container").hidden = "true"
  
  //updating the inner html content of any element
  console.log(document.querySelector(".box").innerHTML = "It is not a box")
  console.log(document.querySelector(".box").innerHTML)

  //attributes methods
  console.log(document.querySelector(".box").hasAttribute("style"))
  console.log(document.querySelector(".box").getAttribute("style"))
  console.log(document.querySelector(".box").setAttribute("style","display:inline-block"))
  console.log(document.querySelector(".box").hasAttribute("style"))
  console.log(document.querySelector(".box").getAttribute("style"))

  console.log(document.querySelector(".box").removeAttribute("style"))
  console.log(document.querySelector(".box").hasAttribute("style"))

  console.log(document.querySelector(".box").attributes)

  //data attributes
  console.log(document.querySelector(".box").dataset)

  //insertion methods

  // let div = document.createElement("div")
  // div.innerHTML = "Hello i am created!"
  // div.setAttribute("class","created");
  // document.querySelector(".container").append(div)
  // document.querySelector(".container").prepend(div)
  // document.querySelector('.container').before(div);
  // document.querySelector('.container').after(div);

  // document.querySelector('.container').replaceWith(div);


  //insertAdjacentHTML/text/Element
  let con = document.querySelector('.container')

  con.insertAdjacentHTML("afterbegin","<caption>Hey this is after begin</caption>")
  con.insertAdjacentText("afterend","Hey this is after end")

  let div = document.createElement("div")
  div.innerHTML = "Hey this is before begin";
  div.setAttribute("id", "created")
  con.insertAdjacentElement("beforebegin",div)

//node removal

  let removingElem = document.getElementById("created");

  removingElem.remove();

  //classlist and classname

  console.log(document.querySelector(".container").classList);
  console.log(document.querySelector(".container").className);

  console.log(document.querySelector(".container").classList.add("ps"));
  console.log(document.querySelector(".container").classList.remove("ps"));
  console.log(document.querySelector(".container").className);

  //toggle
  // console.log(document.querySelector(".container").classList.toggle("container"));
  // console.log(document.querySelector(".container").className);

  //contains
  console.log(document.querySelector(".container").classList.contains("container")); //true
