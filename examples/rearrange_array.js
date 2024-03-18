//Rearrange array in increasing-decreasing order
function rearrange(array){
    if(array.length < 2){
        return array;
    }
    const mid = Math.trunc(array.length / 2);
    const left = array.slice(0,mid);
    const right = array.slice(mid);
    return merge(rearrange(left),rearrange(right));
}

function merge(left,right){
    let sorted = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sorted.push(left.shift());
        }else{
            sorted.push(right.shift());
        }
    }
    const result = [...sorted, ...right,...left];
    return result;
}

const array = [5,6,2,3,9,1];
const newarr = rearrange(array);
const l = newarr.length;

for(let i = 0; i < l/2; i++){
    console.log(newarr[i]);
}
for(let i = l - 1; i >= l/2; i--){
    console.log(newarr[i]);
}