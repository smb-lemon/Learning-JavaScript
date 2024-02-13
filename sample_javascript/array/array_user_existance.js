//check user with name if it exist or not
const user = [
  {
    id: 1,
    name: "dev",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "tony",
    isActive: true,
    age: 22,
  },
  {
    id: 2,
    name: "dom",
    isActive: true,
    age: 27,
  },
  {
    id: 3,
    name: "zyol",
    isActive: false,
    age: 33,
  },
];

/////////1//////

// const searchName = (name, user) => {
//   let existUser = false;
//   for (let i = 0; i < user.length; i++) {
//     if (user[i] === name) {
//       existUser = true;
//     }
//   }
//   return existUser;
// };

//////////2////////

// const searchName = (name, user) => {
//   const user = user.find((user) => user.name === name);
//   return Boolean(user);
// };

/////////3////////

// const searchName = (name, user) => {
//     const index = user.findIndex((user) => user.name === name);
//     return index >= 0;
//   };

/////////4/////////

const searchName = (name, user) => {
  const user = user.some((user) => user.name === name);
  return user;
};
