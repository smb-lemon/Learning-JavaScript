let anagrams = function (s, t) {
  let x = [];
  let y = [];
  x = s;
  y = t;
  s = s.replace(/ /g, "");
  t = t.replace(/ /g, "");

  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    // x.push(ascii);
    // sum1 += x[i];
    //x.toString();
    console.log(ascii);

    console.log(x);
    for (let j = 0; j < t.length; j++) {
      y = t.charCodeAt(j);
      // y.push(ascii_2);
      // sum2 += y[j];
      //y.toString();
      console.log(y);
      console.log(y);

      if (
        x.length === y.length &&
        x.every(function (value, index) {
          return value === y[index];
        })
      ) {
        return true;
      } else {
        return false;
      }
    }
    //console.log(ascii_2);
  }
  //  }
  //     if (x == y) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  console.log(y);
};
let s = " zn";
let t = "bt  ";
console.log(anagrams(s, t));
