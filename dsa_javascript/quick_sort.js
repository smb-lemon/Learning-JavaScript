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
