//Given three Sorted arrays in non-decreasing order, print all common elements in these arrays.

// function threeArray(arr1,arr2,arr3){
//     let temp = [];
//     let result = [];
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 //temp = arr1[i];
//                 temp.push(arr1[i]);
//                 break;
//             }
//         }
//     }for(let k = 0; k < temp.length; k++){
//             for(let l = 0; l < arr3.length; l++){
//             if(temp[k] === arr3[l]){
//                 result.push(temp[k]);
//                 break;
//             }
//         }
//      }
    
//     return result;
// }
// function includeArr(arr1,arr2,arr3){
// for(let i of arr2){
//     if(arr1.includes(i) === arr3.includes(i)){
//      // console.log(arr2[i]);
//      return i;
//     }
// }
// }

//Using Binary search
function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.trunc((left+right)/2);
        if(target === arr[mid]){
            return true;
        }else if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1
        }
    }
    return false;
}

function threeArray(arr1,arr2,arr3){
    let temp = [];
    for(let i = 0; i < arr1.length; i++){
        if((binarySearch(arr2,arr1[i])) && (binarySearch(arr3,arr1[i]))){
            temp.push(arr1[i]);
        }
    }
    return temp;
}

const arr1 = [1, 5, 5]; //[1, 5, 10, 20, 40, 80]
const arr2 = [3, 4, 5, 5, 10]; //[6, 7, 20, 80, 100]
const arr3 = [5, 5, 10, 20]; //[3, 4, 15, 20, 30, 70, 80, 120]
console.log(threeArray(arr1,arr2,arr3));
//console.log(includeArr(arr1,arr2,arr3));