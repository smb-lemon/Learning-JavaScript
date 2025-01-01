const obj = {
    name : "lemon",
    math : 70,
    eng : 88,
    science : 77,
    chem : 60,
    getAvg : function(){
        console.log(this);  //obj object
        let avg = (this.math + this.eng + this.science + this.chem);
        console.log(avg);
    },
    getName : () => {
        console.log(this); //window object
    },
    getMath : function (){
        setTimeout(function(){
            console.log(this);  //window object
        })  
    },
    getEng : function (){
        setTimeout(()=>{
            console.log(this);  //obj object
        })
    }  
}

let getSqr = (n) =>{
    console.log(this);   //window object
    console.log(n*n);
} 


// Accessing a function inside object is not possible without this
//This keyword refers to an object that is executing the current piece of code
//Any object which is executing a method is a "this"
//Outside of a an object, "this" can executed and it will show window object
//arrow function returns this as it's parent object as line 13
//normal function return this which object is calling the function(example : obj)