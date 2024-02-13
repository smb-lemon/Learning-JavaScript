//Write a function anagrams(arr) that returns an array cleaned from anagrams.

//using Map() Function

function anagrams(arr) {
  let map = new Map();

  for (let word of arr) {
    let sortedArray = word.toLowerCase().split("").sort().join("");
    map.set(sortedArray, word);
  }
  return Array.from(map.values());
}
let arr = ["Pan", "nap", "ear", "teachers", "cheaters", "era", "hectres"];
console.log(anagrams(arr));

//Using Plain Object

// function anagrams(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sortedArray = arr[i].toLowerCase().split("").sort().join("");
//     obj[sortedArray] = arr[i];
//   }
//   return Object.values(obj);
// }
// let arr = ["Pan", "nap", "ear", "teachers", "cheaters", "era", "hectres"];
// console.log(anagrams(arr));

//leetcode 242

// var isAnagram = function (s, t) {
//   let obj = {};
//   let obj2 = {};

//   for (let i = 0; i < s.length; i++) {
//     let sortedArray = s.toLowerCase().split("").sort().join("");
//     obj[sortedArray] = s[i];
//    // console.log(sortedArray);

//     for (let j = 0; j < t.length; j++) {
//       let sortedArray2 = t.toLowerCase().split("").sort().join("");
//       obj2[sortedArray2] = t[j];
//       //console.log(sortedArray2);

//       if (sortedArray === sortedArray2) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     return Object.values(obj, obj2);
//   }
// };

// let s = "rat";
// let t = "car";
// console.log(isAnagram(s, t));

// var isAnagram = function (s, t) {
//   let obj = {};
//   let obj2 = {};

//   for (let i = 0; i < s.length; i++) {
//     let sortedArray = s.toLowerCase().split("").sort().join("");
//     obj[sortedArray] = s[i];
//     // console.log(sortedArray.trim());

//     for (let j = 0; j < t.length; j++) {
//       let sortedArray2 = t.toLowerCase().split("").sort().join("");
//       obj2[sortedArray2] = t[j];
//       // console.log(sortedArray2);

//       if (sortedArray.trim() === sortedArray2.trim()) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     return Object.values(obj, obj2);
//   }
// };

// let s = " ra t ";
// let t = " t              a      r ";
// console.log(isAnagram(s, t));

// let anagrams = function (s, t) {
//   let x = s.split("").sort().join("").trim();
//   let y = t.split("").sort().join("").trim();

//   console.log(x, y);

//   if (x === y) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// let s = "c   a    t";
// let t = "t  ac  ";
// console.log(anagrams(s, t));
