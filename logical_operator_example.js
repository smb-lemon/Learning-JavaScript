//Logical Operator
//The precedence of AND && is higher than ||
//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

console.log( null || 2 && 3 || 4 );//Output will be 3 because  && has higher precedence

console.log( 1 && null && 4 );//Output will be null, because it’s the first falsy value from the list.

/*
alert( alert(1) && alert(2) );
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).
Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined 
is a falsy value. And && looks for a falsy value and returns it, so it’s done.
*/

/*
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
*/