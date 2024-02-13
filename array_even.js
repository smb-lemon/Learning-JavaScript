let marks = [92, 84, 42, 99, 91, 90];
let sum = 0;
let highest = marks.filter((val) => {
  val = val % 2 == 0;
  return val;
});
for (let i of val) {
  sum += i;
}

console.log(highest, sum);
