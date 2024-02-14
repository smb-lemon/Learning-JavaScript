//Given an array of elements and a target,find the index of the target in the array. return -1 if target not found

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([4, 2, 6, 10, 3], 3)); //4
console.log(linearSearch([4, 2, 6, 10, 3], 22)); //-1

//Big-O = O(n) **Linear
