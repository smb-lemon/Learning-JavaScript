const array = ['apple','orange','mango','date','mango','apple','apple'];
// const array = [true,false,false,false,true];
// const frequency = (arr) => {
//     const map ={};
//     arr.forEach(value => {
//         if(map[value]){
//             map[value]++;
//         }else{
//             map[value] = 1;
//         }
//     });
//     return map;
// };

// console.log(frequency(array));

let map = new Map();
for(let i = 0; i < array.length; i++){
    if(map.has(array[i])){
        let count = map.get(array[i]);
        //map.delete(array[i]);
        map.set(array[i],count+1);
    }else{
        map.set(array[i],1);
    }
}

console.log(map);