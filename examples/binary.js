function binary(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.trunc((left + right) / 2);
    if (target === array[middle]) {
      return middle;
    }
    if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
const array = [2, 6, 7, 8, 9];
console.log(binary(array, 6));
