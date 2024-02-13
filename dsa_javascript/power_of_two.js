//Given a positive integer'n',determine if the number is a power of ywo or not

function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(powerOfTwo(5));
console.log(powerOfTwo(2));

//Big-O = O(logn)

//Using BitWise operator for more efficiency

// function primeOfTwo(n){
//     if( n < 1){
//         return false;
//     }
//     return (n & (n-1)) === 0;
// }

//Big-O = O(1)
