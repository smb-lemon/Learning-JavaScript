//Short-circuit evaluation

true || console.log("not printed");
false || console.log("printed");

//Output will be "printed"because  first console function does not execute because  the operand is truthy
//The second line console function will be executed because the operand is falsy