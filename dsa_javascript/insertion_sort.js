const arr = [8, 7, 5, -1, 3, 2];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let sortedArray = i - 1;
    while (sortedArray >= 0 && arr[sortedArray] > numberToInsert) {
      arr[sortedArray + 1] = arr[sortedArray];
      sortedArray--;
    }
    arr[sortedArray + 1] = numberToInsert;
  }
}
insertionSort(arr);
console.log(arr);

//Big-O = O(n^2)
