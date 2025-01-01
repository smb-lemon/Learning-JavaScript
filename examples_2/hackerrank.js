function solution(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    for(let i = 0; i < apples.length; i++){
        if(apples[i] + a >= s && apples[i] + a <= t){
            appleCount++;   
        }
    }
    for(let j = 0; j < oranges.length; j++){
        if(oranges[j] + b >= s && oranges[j] + b <= t){
            orangeCount++;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}

s = 7;
t = 10;

a = 4;
b = 15;

apples = [-2, 3, 4, 20]
oranges = [3, -2, -4, -20, 12]



solution(s, t, a, b, apples, oranges)