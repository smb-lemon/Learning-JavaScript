//Given a sorted array of elements and a target,find the index of the target in the array. return -1 if target not found

function recursiveBinarySearch(sortedArray, target) {
  return binarySearch(sortedArray, target, 0, sortedArray.length - 1);
}
function binarySearch(sortedArray, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.trunc((leftIndex + rightIndex) / 2);
  if (target === sortedArray[middleIndex]) {
    return middleIndex;
  }
  if (target < sortedArray[middleIndex]) {
    return binarySearch(sortedArray, target, leftIndex, middleIndex - 1);
  } else {
    return binarySearch(sortedArray, target, middleIndex + 1, rightIndex);
  }
}
console.log(recursiveBinarySearch([4, 5, 7, 9, 12], 9));

//Big-O = O(logn)
