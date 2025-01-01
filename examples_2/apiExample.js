let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    console.log("response of first",res);
    return res.json();
})
.then((data) =>{
    //console.log(data);
    console.log(data.fact);
    return fetch(url);
})
.then((res)=>{
    console.log("response of second",res);

    return res.json();
})
.then((data2)=>{
    console.log(data2.fact);
})
.catch((err) => {
    console.log(err);
    
})