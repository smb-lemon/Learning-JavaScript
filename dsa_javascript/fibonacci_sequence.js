//Given a number 'n', find the first 'n' elements of the fibonacci sequence

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(4)); //0,1,1

// //Big-O = O(n)

//Leetcode 2648
//using generator function

// var fibGenerator = function* () {
//   function fibonacci(n) {
//     const fib = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib[n];
//   }
//   let callCount = 0;
//   while (true) {
//     yield fibonacci(callCount);
//     callCount++;
//   }
// };
// const gen = fibGenerator();
// gen.next().values;

// let fibGenerator = function* () {
//   let a = 0,
//     b = 1;
//   while (true) {
//     yield a;
//     let c = a + b;
//     a = b;
//     b = c;
//   }
// };

//using recursive generator
// function* fibGenerator(current = 0, next = 1) {
//   yield current;
//   yield* fibGenerator(next, current + next);
// }

// const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
