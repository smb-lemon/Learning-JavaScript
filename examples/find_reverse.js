//Reverse a given Array

const array = [3,2,6,1,8,4];
function reverse(array){
    if(array.length < 2){
        return array;
    }
    const mid = Math.trunc(array.length/2);
    let left = array.slice(0,mid);
    let right = array.slice(mid);
    return merge(reverse(left),reverse(right));
}

function merge(left,right){
    const sorted = [];
    while(left.length && right.length){
        if(left[0] >= right[0]){
            sorted.push(left.shift());
        }else{
            sorted.push(right.shift());
        }
    }
    const result = [...sorted, ...left, ...right];
    return result;
}

console.log(reverse(array));