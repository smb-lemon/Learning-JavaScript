let h1 = document.querySelector("h1");

function changeColor(color, delay, nextChangeColor){
    setTimeout(()=>{
        h1.style.color = color;
       if(nextChangeColor){
        nextChangeColor();
       } 
    },delay);
    
}

changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000);
    });
});



