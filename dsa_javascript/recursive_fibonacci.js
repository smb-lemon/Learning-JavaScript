//Given a number,find the 'n' th element of the fibonacci sequence

function recursiveFebonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFebonacci(n - 1) + recursiveFebonacci(n - 2);
}

console.log(recursiveFebonacci(7)); //13

//Big-O = O(2^n)  **bad time complexity
