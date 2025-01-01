function saveToDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10)+ 1;
    if(internetSpeed > 5){
        success();
    }else{
        failure();
    }

} 

saveToDb("Lemon", ()=>{
    console.log("data was saved : success ");
        saveToDb("Hello World",() => {
            console.log("data was saved again : success2");
        },() => {
                console.log("'data was not saved : failure2");   
        })
},() => {
    console.log("weak connection...data was not saved : failure");
});