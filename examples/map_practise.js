const numbers = [1,4,7,2,3,3,2,2];
const dates = ["2023/3/22", "2024/4/11","2025/1/8"];
const numSquare = numbers.map(square);
const numCube = numbers.map(cube);
const dateFormate = dates.map(dateInfo);

function square(item){
    return Math.pow(item,2);
}
function cube(item){
    return Math.pow(item,3);
}
function dateInfo(item){
    const a = item.split("/");
    return `${a[2]}-${a[1]}-${a[0]}`;
}
console.log(numSquare);
console.log(numCube);
console.log(dateFormate);

const frequency = (arr) => {
    const map = {};
    arr.forEach(value => {
        if(map[value]){
            map[value]++;
        }else{
            map[value] = 1;
        }
    });
    return map;
};

console.log(frequency(numbers));