//Square
let arr = [1, 2, 3, 4, 5];
arr.forEach((value) => {
  value *= value;
  console.log(value);
});

//We are given array of marks of students.Filter out of the marks of students that scored 90+
let marks = [92, 84, 42, 99, 91, 90];
let highest = marks.filter((val) => {
  return val > 90;
});
console.log(highest);

//Take a number n as input from user .Create an array of numbers from 1 to n

let n = prompt("Enter a number : ");
let arr2 = [];
for (let i = 1; i <= n; i++) {
  arr2[i - 1] = i;
}
console.log(arr2);

//Use the reduce method to calculate sum of all numbers in the array
let sum2 = arr2.reduce((res, curr) => {
  return res + curr;
});
console.log(sum2);

//Use the reduce method to calculate factorial or product of all numbers in the array

let factorial = arr2.reduce((res, curr) => {
  return res * curr;
});
console.log(factorial);
