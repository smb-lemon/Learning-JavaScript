function climbingStairCase(n) {
  const numberOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  return numberOfWays;
}
console.log(climbingStairCase(5)); //8
console.log(climbingStairCase(2)); //2

//Big-O = O(n)
