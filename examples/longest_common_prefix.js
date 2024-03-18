function longPrefix(str){
    let temp = "";
    for(let i = 0; i < str[0].length; i++){
        for(let j = 1; j < str.length; j++){
            if(str[j][i] !== str[0][i]){
                return temp;
            }
        }
        temp = temp + str[0][i];
    }
    return temp;
}

let str = ["flower", "flow", "flight"];
console.log(longPrefix(str));