//Given a natural number 'n' , determine if the number is prime or not

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i !== 0) {
      return true;
    }
  }
  return false;
}

console.log(isPrime(5));
console.log(isPrime(4));

//Big-O = O(sqrt(n))
