/*
//appendChild() - creating a nested dom structure
const fragment = document.createDocumentFragment();
 const li = fragment
   .appendChild(document.createElement("Section"))
   .appendChild(document.createElement("ul"))
   .appendChild(document.createElement("li"));
 li.textContent = "hello world";
 document.body.appendChild(fragment); 
 */
/* 
//removeChild() - to remove a child element without specifying it parent node
const node = document.getElementById("child");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
 */

//Create a new button element and give ita text "click me" and insert the button as the first element inside the body tag
let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "blue";

document.querySelector("body").prepend(newBtn);

//Create a new <p> tag in html, give it a class & some styling
//then create a new class in CSS and append this class from the JS File
let para = document.querySelector("p");
para.getAttribute("content");
//para.setAttribute("content","myClass") //Replaces the class
para.classList.add("newClass");
