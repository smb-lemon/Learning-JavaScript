let nums = [ 61, 63, 64, 65]

function modulus() {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 38) {
            console.log(nums[i])
            continue;
        }

        let mod = nums[i] % 5;

        if (mod < 3) {
            console.log(nums[i])
        } else {
            console.log(nums[i] + (5 - mod))
        }
    }
}

modulus()

console.log(Math.ceil(6.6)) // 7
console.log(Math.abs(6.6)) // 6
console.log(Math.abs(0))
console.log(Math.abs(`string`))
console.log(Math.abs([-6.5]))
console.log(Math.abs(null));

// Math.floor()
// Math.ceil()

// Math.PI
// Math.log()
// Math.pow()
// Math.sqrt()
// Math.abs()
// Math.round()
// Math.floor()


// String, Math, For loop, break, continue and if else


// 61 % 5 = 1 - 4
// 62 % 5 = 2 - 3
// 63 % 5 = 3 - 2
// 64 % 5 = 4 - 1
// 65 % 5 = 0 - 5
// 6 % 5 = 1
// 7 % 5 = 2
// 8 % 5 = 3
// 9 % 5 = 4
// 10 % 5 = 0
// [0 - (mod - 1)]