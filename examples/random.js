/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let x = 0;
    for(let n of nums){
        x = x ^ n;
    }
    console.log(x);
    if(x === 1){
            return x;
        }
   // const newMap = {};
        
    // for(let i = 0; i < nums.length; i++){
    //    if(newMap[nums[i]]){
    //     newMap[nums[i]]++;
    //    }
    //     else{
    //         newMap[nums[i]] = 1;
    //     }
    //  }
    //  for(let n in newMap){
    //     if(newMap[n] == 1){
    //         return n;
    //     }
    //     console.log(newMap[n]);
    //  }
    //  return newMap;
};
var nums = [2,2,1,1,5];
console.log(singleNumber(nums));

