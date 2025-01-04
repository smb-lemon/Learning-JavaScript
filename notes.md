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