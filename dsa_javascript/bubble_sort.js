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

//Bubble Sort Pseudocode

// 1. Starting with the first element, compare the current element with the next element of the array.
// 2. If the current element is greater than the next element of the array, swap them.
// 3. If the current element is less than the next element, just move to the next element.
// 4. Start again from Step 1.

// sample array = [-9,5,-2,3,7,1]
// [||-9 5 ||-2 3 7 1] => [-9 5 -2 3 7 1] //i = 0
// [-9 ||5 -2|| 3 7 1] => [-9 -2 5 3 7 1] //i = 1
// [-9 -2|| 5 3 || 7 1] => [-9 -2 3 5 7 1] //i = 2
// [-9 -2 3 ||5 7|| 1] => [-9 -2 3 5 7 1] //i = 3
// [-9 -2 3 5|| 7 1 ||] => [-9 -2 3 5 1 7]//i = 4
// =======================================
// [-9 -2 3 ||5 1 ||7 ] => [-9 -2 3 1 5 7] //i = 3
// =======================================
// [-9 -2|| 3 1 ||5 7] => [-9 -2 1 3 5 7] //i = 2
// ======================================
// [-9 -2 1 3 5 7] => [-9 -2 1 3 5 7] //Out of loop as array is sorted