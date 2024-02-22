const arr = [3,5,6,7,9];
// let max = arr[0];
// let min = arr[0];
function arrayMax(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function arrayMin(arr) {
    let min = arr[0];
    for(let j = 0; j < arr.length; j++){
        if(arr[j] < min){
            min = arr[j];
        }
    }
   return min;
}

function arraySwap(arr) {
    let maxSwap = arr[0];
    let minSwap = arr[0];
    for(let k = 0; k < arr.length; k++){
        if(arr[k] <= minSwap){
            minSwap = arr[k];
            minSwap = k;
        }
       if(arr[k] > maxSwap){
            maxSwap = arr[k];
            maxSwap = k;
        }
        
    //}
    // for(let i = 0; i < arr.length; i++){
        // if(arr[k] == max){
        //     arr[k] = min;
        // }else if( arr[k] == min){
        //     arr[k] = max;
        // }
    }
    // console.log(arr[maxSwap]);
    // console.log(arr[minSwap]);
    let temp = arr[maxSwap];
       arr[maxSwap] = arr[minSwap];
        arr[minSwap] = temp;
    return arr;

}
console.log(arr);
console.log(arraySwap(arr));
console.log(arrayMax(arr));
console.log(arrayMin(arr));
