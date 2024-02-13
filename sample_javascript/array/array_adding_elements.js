//Adding new element to the array
const array = [2, 4, 6, 2, 4, 9];

/////////1///////

// const addArray = (array,element) => {
//     array.push(element);
//     return array;
// }
// console.log(addArray(array,3));

/////////2///////      (Spread Opertaor)
//the spread operator is used to expand the array into individual arguments

const addArray = (array, element) => {
  return [...array, element];
};
console.log(addArray(array, 5));
console.log(array);
