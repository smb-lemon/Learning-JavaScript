const arr = [5, -6, 3, 9, 2, 7];
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
//quickSort(arr);
console.log(quickSort(arr));

//Worst Case = O(n^2)
//Average Case = O(nlogn)

//Pseudocode for quick sort
// Check if the array has fewer than 2 elements.
// If so, it's already sorted, so we return the array.
// Otherwise, select the last element of the array as the pivot.
// iterate through the array, partitioning it into two subarrays:
// elements less than the pivot and elements greater than or equal to the pivot.
// then recursively apply the quicksort algorithm to the left and right subarrays.
// Finally,  concatenate the sorted left subarray, the pivot, and the sorted right subarray.


//Sample array : [5, -6, 3, 9, 2, 7];
// Pivot: 7
// Left Array: []
// Right Array: []
// Iterating through the array:5 < 7,
// so push 5 to leftArray -6 < 7,
// so push -6 to leftArray 3 < 7,
// so push 3 to leftArray 9 >= 7,
// so push 9 to rightArray 2 < 7,
// so push 2 to leftArrayRecursively call quickSort on leftArray and rightArray:
// quickSort([5 -6, 3, 2]) returns [5, -6, 2, 3]
// quickSort([9]) returns [9]
// Concatenate the results: [-6, 2, 3, 5, 7, 9]