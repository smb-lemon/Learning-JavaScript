# JavaScript Notes

## Mutable Vs Immutable

### Mutable
**Mutable** means something that can be changed.A mutable value can be something that can be modified after it has been created. 
 **Object** and **Array** are mutable by default in JavaScript. So it means that the properties of **Object** & **Array** can modified after the creation of them.

 ### Immutable 
 **Immutable** means somthing that can not be changed. That means a value can not be changed after it has assigned. 
  Primtives data types like **string**, **boolean**, **numbers** *etc* are immuatable by default in JavaScript. This means their values can not be changed directly. But it is possible to reassign the variable to hold a new value.

## Argument in JavaScript

**Argument in JavaScript are always passed by a value, not by a reference like C++, Java Language**

**When a Primitive Value (String, Boolean, Number *etc.*) is passed as an argument, a copy of value is created. Any changes inside the parameter does not affect the original value.**

**The reference is passed by value. Both the parameter and the argument or original value is pointed to the same object**

## Syntax Parsers

A program that reads your code and determines that what it does and the syntax or grammer is valid

## Lexical Environment 

**Where something sits physically in the code we write**<br>
"Lexical" means "having to do with grammer or words". A lexical environment exists in programming language where you write something is important

## Execution Context 

**A wrapper to help manage the code that is running**<br>
Lexical environment is managed via Execution Context.

## Object
Object is a collection of name value pairs

## DOM

**What is DOM?**<br>
The Document Object Model represents the HTML as a tree structure, allowing JavaScript to
interact with and manupulate it

**How to manipulate DOM?**<br>
Select elements with methods like getElementById or QuerySelector. Add, remove or modify elements dynamically. Updates styles, attributes and content effortlessly,

**Why DOM manipulation is important?**<br>
DOM manipulation transforms static HTML pages into vibrant, user-friendly web applications. From creating dynamic form to building interactive UI components, it's an essential skill for developers.

## Array

**Clone an array in JavaScript**<br>

**The spread operator** : <br>
ES6 introduced the spread operator (...), which provides probably the easiest and most common way to create a shallow clone of an array.

**Array.from()**<br>
Array.from() has a very powerful API that can be used for many different things, including creating a copy of an array.

**Array.prototype.slice()**<br>
Similarly to the spread operator, Array.prototype.slice() can be used to create a shallow copy of an array.

**Array.prototype.filter()**<br>
Array.prototype.filter() can be used to return true for each and every element, resulting in a new array with all of the original array's elements.

**Object.assign()**<br>
Object.assign() can be used in the exact same way as it's used to create a clone of an object, but for an array instead.

**structuredClone()**<br>
To clone an array that contains objects, functions or class instances, we can use the structuredClone() global function, which can be used to deep clone objects.

**Array.prototype.map()**<br>
Array.prototype.map() can be used to map each element of an array to itself to create a new array.

## Event loop in JavaScript

**Event loop is a mechanism in JavaScript that ensures the call stack processes tasks and the Callback Queue and Microtask Queue are checked for tasks to execute**<br>
**It keeps JavaScript non-blocking and single-theaded**

*How it works?*<br>
**JavaScript executes synchronous code in the Call Stack**<br>
**Asynchronous tasks like setTimeOut are sent to the Web APIs**<bar>
**Once completed their callbacks go to the Callback Queue or Microtask Queue for promises**<br>
**The Event Loop checks if the Call Stack is empty and pushes tasks from the queues**<br>

*Example*

``` 
console.log("Start");
setTimeOut(() => {
  console.log(""Timeout");
},0);
Promise.resolve().then(() => {
  console.log("Promise")
});

console.log("End"); 
```
*Explanation*<br>

- `console.log("Start")` and `console.log("End")` : **synchronous tasks in the call stack**<br>
- **Promise Callback** : Goes to the Microtask Queue(Higher Priority)<br>
- **setTimeOut Callback** : Goes to the Callback Queue(Lower Priority)

## Undefined Vs Null <br>

*Undefined*<br>
- A variable is `undefined` when it’s declared but hasn’t been assigned a value. 
- It's automatically assigned by JavaScript that are declared but not initialized <br>
- Undefined is of type `undefined`. <br>
*Example:* 
 ```
let x; 
console.log(x); // Output: undefined 
```
*Null*<br>
- Represents the intentional absence of any object value.It's way to clear or reset a variable.<br>
- Developers manually assign null to variables when they want to indicate that variable should not hold any value<br>
- Despite being an empty value, null is of type object <br>
*Example :*
```
let y = null; 
console.log(y); // Output: null 
```
**Key Differences:** 
- Type: `undefined` is a type itself, while `null` is an object. 
- Intent: Use `null` to explicitly clear a value. `undefined` signals an uninitialized variable. 
- Equality: 
 ```
console.log(null == undefined); // true (loose equality) 
console.log(null === undefined); // false (strict equality) 
```
## setTimeOut function<br>
setTimeOut() is a javascript function that allows us to execute a piece of code or a function after a specific delay(ms).
Basically it's a way to schedule task which will run in later or in future.<br>
*Syntax*<br>
`setTimeOut(function,delay)`<br>
*Example*<br>
```
function greet(){
  console.log("Hello");
}
setTimeOut(greet, 2000);
```
**Inline Function**<br>
```
setTimeOut(function(){
  console.log("Hello");
},2000);
```
**setTimeOut() with parameter**
```
function greet(name){
  console.log(`Hello, ${name}`);
}
setTimeOut(greet, 2000, lemon);
```
**Clearing a TimeOut**<br>
```
let timeOutId = setTimeOut(()=>{
  console.log("hello world");
}, 3000);
clearTimeout(timeOutId);
console.log("Timeout cleared")
```