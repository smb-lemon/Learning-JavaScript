//Permute Two Arrays such that Sum of Every Pair is Greater or Equal to K

function sumArray(arr1,arr2,k){
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] + arr2[j] >= k) {
       return `Yes`;
    }else
    {
      return `No`;
    }
  }
}
return k;
}
  const arr1 = [1,2,2,1];
  arr1.sort();
  const arr2 = [3,3,3,4];
  arr2.sort();
  arr2.reverse();
  console.log(sumArray(arr1,arr2,5));