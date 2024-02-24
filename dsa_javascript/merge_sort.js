function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergesort(leftArr), mergesort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  const resultArr = [...sortedArr, ...leftArr, ...rightArr];
  return resultArr;
}

const arr = [1, 7, 2, 4, 3, 6];
console.log(mergesort(arr));
//Big-O = O(nlogn)

//merge sort pseudocode:
// Step 1: If it is only one element in the list, consider it already sorted, so return.
// Step 2: Divide the list recursively into two halves until it can no more be divided.
// Step 3: Merge the smaller lists into new list in sorted order.

//sample array : [1,7,2,4,3,6]
// mergesort[1,7,2,4,3,6]
// finding midpoint = arr[3] = 4 //Line 5
// left array = [1,7,2] //Line 6
// right array = [4,3,6] //Line 7
// ===================================
// mergesort(leftarray) = [1,7,2]
// finding midpoint = arr[1] = 7 //Line 5
// left array = [1]
// right array = [7,2]
// ===================================
// mergesort(right array) = [7,2]
// finding mid = arr[1] = 2
// left array = [7]
// right array = [2]
// ===================================
// mergesort(rightarray) = [4,3,6]
// finding midpoint = arr[1] = 3 //Line 5
// left array = [4]
// right array = [3,6]
// ===================================
// mergesort(right array) = [3,6]
// finding mid = arr[1] = 6
// left array = [3]
// right array = [6]
// ===================================
// merge(leftarray,rightarray)
// [7] [2] = [2,7]
// ========
// [1] [2,7] = [1,2,7]
// ====================
// [3] [6] = [3,6]
// ========
// [4] [3,6] = [3,4,6]
// ===================
// [1,2,7] [3,4,6] = []
// [2,7] [3,4,6] = [1]
// [7] [3,4,6] = [1,2]
// [7] [4,6] = [1,2,3]
// [7] [6] = [1,2,3,4]
// [7] = [1,2,3,4,6]
// [] = [1,2,3,4,6,7]
// ======================================