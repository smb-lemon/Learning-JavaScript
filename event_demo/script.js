//Dark and Light Mode toggle from a button

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("white");

    //document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    body.classList.add("white");
    body.classList.remove("dark");

    //document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
