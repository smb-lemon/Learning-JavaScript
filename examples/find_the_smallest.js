//Find the smallest element in an array

let arr = [2,3,4,6,5];
function smallArr(arr){
let temp = arr[0];
for(let i = 0; i < arr.length; i++){
    if(temp > arr[i]){
        temp = arr[i];
    }
}
return temp;
}
console.log(smallArr(arr));
