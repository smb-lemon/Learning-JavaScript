let alphabate = function (str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    str[i] = res[i];

    if (str.charAt(i) == str.charAt(i).toLowerCase(i)) {
      res += str.charAt(i).toUpperCase(i);
    } else if (str.charAt(i) == str.charAt(i).toUpperCase(i)) {
      res += str.charAt(i).toLowerCase(i);
    }

    // if (str[i] >= "a" && str[i] <= "z") {
    //   res = str[i] - 32;
    // } else if (str[i] >= "A" && str[i] <= "Z") {
    //   res = str[i] + 32;
    // }
  }
  //console.log(res);
  return res;

  //console.log(str.charAt());
};
let str = "birtHdaY";

console.log(alphabate(str));
//console.log (alphabate);
