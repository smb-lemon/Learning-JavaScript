let url = "https://catfact.ninja/fact";

let button = document.querySelector("button");
button.addEventListener("click", async()=>{
    let fact = await apiEx();
    let para = document.querySelector("#random");
    para.innerText = fact;
    console.log(fact); 
})

async function apiEx(){
    try{
    let res = await axios.get(url);
    return res.data.fact;
    }catch(e){
        console.log(e);
        return "NO fact found";
    }
    
}