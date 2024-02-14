function towerOfHanoi(n, fromTower, toTower, usingTower) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromTower} to ${toTower}`);
    return;
  }
  towerOfHanoi(n - 1, fromTower, usingTower, toTower);
  console.log(`Move disk ${n} from ${fromTower} to ${toTower}`);
  towerOfHanoi(n - 1, usingTower, toTower, fromTower);
}
towerOfHanoi(3, "A", "C", "B");
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C

//Big-O = O(2^n)
