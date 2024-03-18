let str = '';
function romanToInt(str){
    let map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
    ]);
    let res = 0;
    let lastIndex = str.length - 1;
    for(let i = lastIndex; i >= 0 ; i--){
        let current_val = str[i];
        let current = map.get(current_val);
        //when the value is greater than i and last index is greater than current
        if(i < lastIndex && map.get(str[i + 1]) > current){
            res = res - current;
        }else{
            res = res + current;
        }
       // console.log(map.get(str[i+1]));
    }
    return res;
}
console.log(romanToInt('IV'));

