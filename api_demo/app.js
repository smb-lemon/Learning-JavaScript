const URL = "https://cat-fact.herokuapp.com/facts";
const para = document.querySelector("#p");
const btn = document.querySelector("#btn");

const getApi = async () => {
  console.log("getting data in progress.....");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  para.innerText = data[1].text;
};
btn.addEventListener("click", getApi);
