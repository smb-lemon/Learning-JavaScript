//To walk over all keys of an object, there exists a special form of the loop: for..in
let user = {
    name: 'dave',
    age: 22,
    isAdmin: true
};

for (let key in user){
    console.log(key); //Values for the key(name,age.....)
    console.log(user[key]);
}