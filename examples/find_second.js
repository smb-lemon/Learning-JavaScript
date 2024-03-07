//Find Second Smallest and Second Largest Element in an array

const array = [6,4,8,1,5];

function second(array){
    if(array.length < 2){
        return array;
    }

    const mid = Math.trunc(array.length / 2);
    const left = array.slice(0,mid);
    const right = array.slice(mid);
    return merge(second(left),second(right));
}

function merge(left,right){
    const sortedArr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
    }
    const result = [...sortedArr, ...left, ...right];
    return result;
}
let newArray = second(array);
console.log(second(array));
console.log(`Second Smallest is : ${newArray[1]}, Second largest is : ${newArray[array.length-2]}`);
