//AND Operand

console.log( 1 && 0); 
console.log( 1 && 5); 
console.log( null && 0); 
console.log( 1 && 0 && null); 

/*
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.
*/