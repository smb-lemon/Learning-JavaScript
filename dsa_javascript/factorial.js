//Given an integer'n', find the factorial of that integer

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); //120
//Big-O = O(n) Linear

//leetcode 172

// var trailingZeroes = function (n) {
//   let result = 0;
//   for (let i = 5; i <= n; i *= 5) {
//     result += Math.trunc(n / i);
//   }

//   return result;
// };

// console.log(trailingZeroes(6));
