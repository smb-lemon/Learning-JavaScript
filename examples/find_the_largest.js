//Find the Largest element in an array

let arr = [2,3,6,1,7,8];

function largestArr(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max - 1);
}

largestArr(arr);