//Given a sorted array of elements and a target,find the index of the target in the array. return -1 if target not found

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.trunc((leftIndex + rightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([4, 6, 7, 8, 9, 11], 11));
console.log(binarySearch([4, 6, 7, 8, 9, 11], 1));

//Big-O = O(logn)
