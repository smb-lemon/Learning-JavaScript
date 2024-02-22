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

//Pseudocode
// Start from the second element (assume the first element is the sorted part).
// Store the current element in a key.
// Check all elements in the sorted part that is to the left of the key.
//  If any element is larger than the key,shift it to the right.
//  Insert the key into its correct position.
//  Go to the next key. Repeat the steps.


// sample array = [8, 7, 5, -1, 3, 2]

// i = 1
// numberToInsert = 7
// sortedArray = 0
// arr[0] > 7, so shift arr[0] to arr[1]arr = [8, 8, 5, -1, 3, 2]
// sortedArray = -1
// Insert 7 at arr[0] arr = [7, 8, 5, -1, 3, 2]
// i = 2
// numberToInsert = 5
// sortedArray = 1
// arr[1] > 5, so shift arr[1] to arr[2]arr = [7, 8, 8, -1, 3, 2]
// sortedArray = 0
// arr[0] > 5, so shift arr[0] to arr[1]arr = [7, 7, 8, -1, 3, 2]
// sortedArray = -1
// Insert 5 at arr[0]arr = [5, 7, 8, -1, 3, 2]
// i = 3
// numberToInsert = -1
// sortedArray = 2
// arr[2] > -1, so shift arr[2] to arr[3]arr = [5, 7, 8, 8, 3, 2]
// sortedArray = 1
// arr[1] > -1, so shift arr[1] to arr[2]arr = [5, 7, 7, 8, 3, 2]
// sortedArray = 0
// arr[0] > -1, so shift arr[0] to arr[1]arr = [5, 5, 7, 8, 3, 2]
// sortedArray = -1
// Insert -1 at arr[0]arr = [-1, 5, 7, 8, 3, 2]
// i = 4
// numberToInsert = 3
// sortedArray = 3
// arr[3] > 3, so shift arr[3] to arr[4]arr = [-1, 5, 7, 8, 8, 2]
// sortedArray = 2
// arr[2] > 3, so shift arr[2] to arr[3]arr = [-1, 5, 7, 7, 8, 2]
// sortedArray = 1
// Insert 3 at arr[2]arr = [-1, 3, 5, 7, 8, 2]
// i = 5
// numberToInsert = 2
// sortedArray = 4
// arr[4] > 2, so shift arr[4] to arr[5]arr = [-1, 3, 5, 7, 8, 8]
// sortedArray = 3
// arr[3] > 2, so shift arr[3] to arr[4]arr = [-1, 3, 5, 7, 7, 8]
// sortedArray = 2
// arr[2] > 2, so shift arr[2] to arr[3]arr = [-1, 3, 5, 5, 7, 8]
// sortedArray = 1
// Insert 2 at arr[1]arr = [-1, 2, 3, 5, 7, 8]
