// &&&& chapter 7, cls 50, object ***
// introducing

const { jsx } = require("react/jsx-runtime");

// %%% cls 51, object literal vs constructor

// using literal 
// let obj = {
//     a: 45,
//     b: 56, 
//     c: 78
// }
// obj.c = 50; // replace existing data
// obj.d = 49; // insert new data 
// console.log( typeof obj);
// console.log(obj);


// using constructor

// let obj2 = Object();
// obj2.x = 4;
// obj2.y = 5;
// console.log(obj2);

// let obj3 = new Object();
// obj3.x = 5;
// obj3.y = 8;
// console.log(obj3);

// &&& cls 52, accessing object properties ***

// let obj = {
//     a: 45,
//     b: 56, 
//     c: 78
// }
// console.log(obj.a); // dot notation
// console.log(obj['b']); // array notation
// let another = 'c';
// console.log(obj[another]); // another array notation

// &&& cls 53, setting object properties 

// ok

// &&& cls 54, remove obj properties

// let obj = {
//     a: 2,
//     b: 4, 
//     c: 5
// }

// delete obj.c;
// console.log(obj);

// &&& cls 55, comparing two objects ***

// let obj1 = {
//     a: 3, 
//     b: 4,
//     c: 6
// }
// let obj2 = {
//     x: 5,
//     y: 6,
//     z: 9
// }
// console.log(obj1 === obj2);
// if there are two obj contain same properties, it show equals to false because of their location memory. 

// we can also compare between two obj we can convert obj to string and can compare
// let ob1 = JSON.stringify(obj1);
// let ob2 = JSON.stringify(obj2);
// console.log(ob2);
// console.log(ob1 === ob2);
// console.log(JSON.stringify(obj1)); // do not run, have not react/jsx-runtime