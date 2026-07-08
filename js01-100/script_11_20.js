// **** boolean  cls- 11
var b1 = true;
var b2 = false;
var b3 = Boolean(true);
var b4 = Boolean(false);
// console.log(b1, b2, b3, b4);

// **** js null and undefined cls- 12

var a1 = null;
var a2
// console.log(a1, a2);

// *** js type conversion cls - 13

// string to number 
let n1 = '233455';
let n2 = '333.456'
// console.log(Number(n1)); // working 
// console.log(Number.n1);  // undefined
// console.log(Number.parseFloat(n1)); // working
// console.log(Number.parseInt(n2)); // working

let n3 = 55543;
// console.log(n3);
// console.log(toString.n3);  // not working -> undefined
// console.log(toString(n3)); // [object undefined]
// console.log(n3.toString); // [function: toString]
// console.log(n3.toString()); // output
// console.log(String(n3)); // working

// *** falsy value: 0, null, undefined, ""(empty string)

// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(" ")); // true
// console.log(Boolean('')); // false
// console.log(Boolean(Infinity)); // true
// console.log(String(Infinity)); // result as string
// console.log(true);
// console.log(false);
// let w = true;
// console.log(w.toString()); // working


// *** cls - 14; octal and hexadecimal number

// let hex = 0xff // must use 0x or 0X to convert hexadecimal number
// console.log(hex);
// let hex2 = 0x555;
// console.log(hex2);

// let oct = 075; // though it shows error, but it is working,, must use 0 
// console.log(oct);
// let oct2 = 03334;
// console.log(oct2);
// let oct3 = 0fff;
// console.log(oct3); // not working


// *** cls- 15 js operators

// arithmetic operator: +, -, *, /, %, ++, --
let n01 = 11;
let n02 = 5;
// console.log(n01 % n02); // 1

// incremental operator: 
// pre incremental 
// console.log(++n01); // 12
// console.log(n01); // 12

// post incremental
// console.log(n01++); // 11
// console.log(n01); // 12

// decremental
// pre decremental
// console.log(--n02); // 4
// console.log(n02); // 4

// post decremental
// console.log(n02--); // 5
// console.log(n02); // 4


// assignment operator
// let a = 25;
// let b = 10;
// a = a + b;
// console.log(a); // 35
// a += b;
// console.log(a); // 45

// a -= b;
// console.log(a); // 35

// a *= b;
// console.log(a); // 350

// a /= b;
// console.log(a); // 35

// a %= b;
// console.log(a); // 5

// $$ comparison operators

let p = 25;
let q = 35;
// console.log(p == q); // false
// console.log(p === q); // false

let p1 = 20;
let q1 = '20';
// console.log(p1 == q1); // true
// console.log(p1 === q1); // false
// console.log(p1 != q1); // false
// console.log(p1 !== q1); // true
// console.log(p1> q1); // false
// console.log(p1 < q1); // false
// console.log(p1 >=  q1);
// console.log(p1 <= q1);


// #### cls 16, statements in js

let g = 10;
let h = 25;
let i = g <= h;
// console.log(i);

// @@ cls 17, Math functions

// console.log(Math.E);
// console.log(Math.PI);
// let j = 5.4343;
// console.log(Math.abs(j));
// console.log(Math.floor(j));
// console.log(Math.ceil(j));
// console.log(Math.round(j));
// console.log(Math.max(300, 400));
// console.log(Math.min(455, 433, 777));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(81));

// console.log(Math.random()); // any float number 0 to 1
// console.log(Math.round(Math.random())); // only 0 or 1 
// console.log(Math.round(Math.random() * 50 , 1)); // round number from 1 to 50


// %%% cls 18, date functions

let date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());
// console.log(date.getMilliseconds());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMinutes());

// %%% cls 19, js comments 

// single line comment

/* multi line 
comments */

// %%% chapter 03, cls 20, js logic and conditions

// if conditions
// else conditions
// else if conditions
// switch statements

