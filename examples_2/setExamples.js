
//setTimeout function takes two parameter(function,timeout)

let id = setInterval(() => {
    console.log("This is a interval function");
}, 2000);


setTimeout (() =>{
    clearInterval(id);
    console.log("This is a timeout function")
},10000);

;

//setInterval function executes the function after every interval given time
//setInterval function parameter(function, timeout)
//to stop the process, clearInterval(variable) is used
