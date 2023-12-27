let apples = "3";
let banana = "5";
let n = 2;
n *= 3 + 5;
let increment = 2;
console.log( apples + banana);//Output will be 35,Binary plus
console.log( + apples + + banana); //Output will be 8, both value converted to numbers before binary plus
console.log( n );//Right part evaluated first ,then n *=8 (n=n+8)
console.log( 2* ++increment ); // Output will be 4 because it increments instantly
console.log( 2 * increment++);//Output will be 2 because returns old value first
