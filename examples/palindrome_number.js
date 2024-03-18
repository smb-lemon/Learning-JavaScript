function palindrome(num){
    let numStr = num.toString();
    let newNum = numStr.split("").reverse().join("");
    console.log(newNum);
    return numStr === newNum;
}

let num = 121;
console.log(palindrome(num));