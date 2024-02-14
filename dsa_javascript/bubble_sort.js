let arr = [-9, 5, -2, 3, 7, 1];
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleSort(arr);
console.log(arr);

//Big- O = O(n^2) **Quadratic time complexity
