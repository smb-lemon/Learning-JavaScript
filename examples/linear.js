function linear(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const array = [2, 6, 16, 7];
console.log(linear(array, 7));
