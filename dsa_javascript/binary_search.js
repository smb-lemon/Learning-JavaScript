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
console.log(binarySearch([4, 6, 7, 8, 9, 11], 11));//5
console.log(binarySearch([4, 6, 7, 8, 9, 11], 1));//-1

//Big-O = O(logn)

//**Notes**
/*
Binary search pseudocode
If the array is empty, return -1 as the element cannot be
found.
If the array has elements, find the middle element in the
array. If target is equal to the middle element, return the
middle element index.
If target is less than the middle element, binary search
left half of the array.
If target is greater than middle element, binary search
right half of the array.

sample array : [2,3,5,7,9] target 9;
step 1 : find the middle element
          [2,3,|5|,7,9] = 5 is the middle element //Line 7
            As 5 != 9, it will go to next condition
step 2 : If the target is less than the middle element, binary search left side of te array //Line 11
          [2,3] is the left side,[7,9] is the right side
          As 5 is smaller than 9,it will go to next condition
step 3 : If the target is greater than the middle element,binary search right side of the array //Line 13,14
          [7,9] is the right side,so doing the binary search
          [|7|,9] = 7 is the middle element now
          so 7 === 9 is not true,so it will go to next condition //Line 8
          9 < 7 ,target is less than the middle element,so it is also false,it will go to next condition //Line 11
          9 > 7, traget is greater than middle element,binary search right side //Line 13,14
          so the middle element will shift from 7 to 9;
step 4 : So it will loop again and this time
          9 === 9 is true and it will return the middle element //Line 8

*/
