//Create a h2 heading with the text "Hello JavaScript" and append "from learning school" to this txt using JS
//Create 3 divs with common class name "box" and access them and add "div sample" using loop concept

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from learning school";
let div = document.querySelectorAll(".box");
console.log(div);
console.dir(div);
let i = 1;
for (let divs of div) {
  divs.innerText = `div sample ${i}`;
  i++;
  console.log(divs);
}

//div[0].innerText = "div sample 1";
//div[1].innerText = "div sample 2";
//div[2].innerText = "div sample 3";
