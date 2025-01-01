h1 = document.querySelector("h1");

function colorChange(color,delay){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+ 1;
            if(num > 4){
                reject("promise was rejected");
            }
            h1.style.color = color;
            console.log(`Color change to ${color}`);
            resolve("color changed")    
        },delay)
    })
}
async function test(){
    try{
        await colorChange("blue", 2000);
        await colorChange("yellow", 2000);
        await colorChange("red", 2000);
        await colorChange("pink", 2000);
    }catch(err){
        console.log("Error caught");
        console.log(err);   
    }
    let sum = 2;
    console.log(sum + 1);
}