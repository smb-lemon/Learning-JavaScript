//remove duplicate in array
const array = [2, 3, 4, 3, 5, 8, 2];

///////////1/////////

// function uniqueArray() {
//   const uniqueArray2 = [];
//   array.forEach((element) => {
//     if (!uniqueArray2.includes(element)) {
//       uniqueArray2.push(element);
//     }
//   });
//   return uniqueArray2;
// }
// console.log(uniqueArray(array));

///////////2////////////
//the spread operator is used to expand the array into individual arguments

function uniqueArray(array) {
  return [...new Set(array)];
}
console.log(uniqueArray(array));
console.log(array);

//////////3///////////

// const uniqueArray = (array) => {
//   return array.reduce((value, element) => {
//     return value.includes(element) ? value : [...value, elemet];
//   }, []);
// };
// console.log(uniqueArray(array));
// console.log(array);
