//creating an iterator which returns array reverse order

//using a object iterator

const arr = [
  "Smb Lemon",
  "Ferdous Anik",
  "Mehedi hasan Mahin",
  "Nahid Hasan Mony",
];

const arrayObj = {
  array: arr,
};

arrayObj[Symbol.iterator] = function () {
  const array = this.array;
  let counter = this.array.length - 1;
  return {
    next: function () {
      if (counter < 0) {
        return {
          //value: undefined,
          done: true,
        };
      } else {
        return {
          value: array[counter--],
          done: false,
        };
      }
    },
  };
};

for (let person of arrayObj) {
  console.log(person);
}

//using normal iterator

// function createIterator(array) {
//   let counter = array.length - 1;
//   return {
//     next: function () {
//       if (counter < 0) {
//         return {
//           value: undefined,
//           done: true,
//         };
//       } else {
//         return {
//           value: array[counter--],
//           done: false,
//         };
//       }
//     },
//   };
// }

// const iterator = createIterator(arr);
// let person = iterator.next();
// console.log(person);
// person = iterator.next();
// console.log(person);
// person = iterator.next();
// console.log(person);
// person = iterator.next();
// console.log(person);

/*
Objects that can be used in for..of are called iterable.

Technically, iterables must implement the method named Symbol.iterator.
The result of obj[Symbol.iterator]() is called an iterator. It handles further iteration process.
An iterator must have the method named next() that returns an object {done: Boolean, value: any},
here done:true denotes the end of the iteration process, otherwise the value is the next value.
The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
Built-in iterables like strings or arrays, also implement Symbol.iterator.
String iterator knows about surrogate pairs.
*/
