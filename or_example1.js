//Getting the first truthy value from a list of variables or expressions.

let firstName = "";
let lastName = "";
let nickname = "";
console.log( firstName || lastName || nickname || "Unknown");
//Output will be "Unknown", all variables were empty or falsey
/*
The OR || operator does the following:

*Evaluates operands from left to right.
*For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
*If all operands have been evaluated (i.e. all were false), returns the last operand.
A value is returned in its original form, without the conversion.
*/