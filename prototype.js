//Prototype : A special property in JS Object. Reference to an Object

const employee = {
  calcTax() {
    console.log("Tax rate is 25%");
  },
};

const Adam = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate is 33%");
  },
};

const Dan = {
  salary: 40000,
};
//If object and prototype are same method, object method will be used
Adam.__proto__ = employee; //the calcTax function will show 33%
Dan.__proto__ = employee; // the calcTax function will show 25%
