let x  = 2;
x = -x;
let y = 4;
let z = "Binary" + "Concatenation";

console.log( x );// unary negation
console.log( y -x ); // binary minus subtracrtion
console.log( 8 % 3); //Remainder
console.log( 2 ** 4); //Exponentiation, a to the power for b
console.log( 8 ** (1/2)); //square root
console.log( z ); // String Concatenation with binary '+'
console.log( "1" + 4 ) //Output will be a string
console.log( '1' + 4 + 4); // Output will be 144
console.log( 1 + 4 + '4');//Output will be 54
console.log( 7 - '2'); // Output will be 5 because '2' coverts to a number

/*

Precedence	Name	Sign
…	…	…
14	unary plus  	+
14	unary negation	-
13	exponentiation	**
12	multiplication	*
12	division	    /
11	addition	    +
11	subtraction	    -
…	…	…
2	assignment	    =
=>1   comma         ,

*/