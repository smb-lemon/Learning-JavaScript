function saveToDb(data){
    return new Promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10)+ 1;
        if(internetSpeed > 5){
            resolve("success : data was saved");
        }else{
            reject("failure : weak connection");
        }
    });

} 

let request = saveToDb("Lemon");
request.then((res) =>{
    console.log("data 1 saved");
    //console.log(request);
    console.log(res);
    return saveToDb("Hello World");
})
.then((res)=> {
    console.log("data 2 saved");
    console.log(res);
    console.log(request);
    return saveToDb("New Promise");
})
.then((res)=> {
    console.log("data 3 saved");
    console.log(res);
    console.log(request);  
})
.catch((err)=>{
    console.log("weak connection");
    console.log(err);
    console.log(request);
 
    
})

// let h1 = document.querySelector("h1");


// function colorChange(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("Color changed");
//         },delay);
//     });
// }

// colorChange("red", 2000)
//     .then(()=>{
//         console.log("red color updated");
//         return colorChange("blue", 2000);
//     })
//     .then(()=>{
//         console.log("blue color updated");
//         return colorChange("yellow", 2000);
//     })
//     .then(()=>{
//         console.log("yellow color added");
//         return colorChange("green", 2000);  
//     })
//     .then(()=>{
//         console.log("green color added");
        
//     })