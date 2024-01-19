//Cloning and merging, Object.assign

let user = { name: "Dave"};
let permission1 = { canView: true};
let permission2 = { canEdit: false};

Object.assign(user,permission1,permission2); // copies all properties from permissions1 and permissions2 into user

console.log(user.name);
console.log(user.canEdit);
console.log(user.canView);