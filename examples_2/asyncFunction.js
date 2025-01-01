async function greet(){
    //throw(xyz.xyz());
    return "hello";
}

greet()
.then((res) => {
    console.log("promise was solved");
    console.log(res);
    
})
.catch((err)=>{
    console.log("promise was rejected with err : ", err);
    
})

let test = async() => {
    return "hello";
}

function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()* 10)+ 1;
            console.log(num); 
            resolve(); 
        }, 2000);
    });
}

async function test2(){
    await getNum();
    await getNum();
    await getNum();
    getNum();


}