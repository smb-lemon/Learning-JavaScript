//Function Declaration: the function in the main code flow

function sum(a, b) {
    let result = a + b;
  
    return result;
  }

//  Function Expression: the function in the context of an expression

let sum = function(a, b) {
    let result = a + b;
  
    return result;
  };

//Arrow functions:

let sum = (a, b) => a + b;
let sum = (a, b) => { // or multi-line syntax with { ... }, need return here:
  return a + b;
}
let sayHi = () => alert("Hello");// without arguments
let double = n => n * 2;// with a single argument