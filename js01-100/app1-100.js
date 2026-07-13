
// cls 1 - 10 %%% 

// let str = 'sajal';
// let str1 = String('sajal mazumder');
// let str2 = String(1244);
// let str3 = String(`sajal and borsa`)

// console.log(str, str1, str2, str3);

// let num = 1235;
// let num1 = Number('12356');

// console.log(num, num1);

// console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
// console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
// console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
// console.log(Number.MIN_VALUE);  // 5e-324
// console.log(10/ 0);  // Infinity
// console.log('ab' * 10);  // NaN
// console.log(toString(Infinity));  // [object Undefined]

// cls 11 , 12 ****

// let a = true;
// let b = false;
// let c = Boolean('true');
// let d = Boolean('false');
// console.log(a, b, c, d);

// let e = null;
// let f = undefined;
// let g;
// console.log(e, f, g);

// cls 13, type conversion *****

// string to number 
// let n1 = '233';
// let n2 = '34.56';
// console.log(Number(n1));
// console.log(Number(n2));
// console.log(Number.parseFloat(n1));
// console.log(Number.parseInt(n2));

// number to string
// let n3 = 2235;
// console.log(n3.toString);  // [Function: toString]
// console.log(toString.n3); // undefined
// console.log(n3.toString()); // 2235
// console.log(toString(n3)); // [object Undefined]
// console.log(String(n3)); // 2235

// console.log(String(Infinity)); // Infinity
// console.log(Infinity.toString()); // Infinity
// console.log(Infinity.toString); // [Function: toString]
// console.log(toString.Infinity); // undefined

// let t = true;
// console.log(toString(t)); // [object Undefined]
// console.log(t.toString()); // true
// console.log(String(t)); // true

// falsy value, null, undefined, ''empty string

// console.log(Boolean(null));  // false
// console.log(Boolean(undefined));  // false
// console.log(Boolean(" "));  // true
// console.log(Boolean(' '));  // true
// console.log(true);  // true

// $$ cls 14, octal and hexadecimal 

// let hex1 = 0xfdd;
// let hex2 = 0X677;
// console.log(hex1, hex2); // must use 0x or 0X 

// let oct = 05344;
// // let oct1 = 0r44; // error
// console.log(oct); // must use 0 

// $$$ operator, arithmatic operato +, -, /, *, %

// let a1 = 10;
// let a2 = 20;
// console.log(a1 + a2);
// console.log(a1 % a2);
// console.log(a1 % 2);

// // incremental, pre increment and post increment
// console.log(++a1);
// console.log(a1); // pre
// console.log(a2++); 
// console.log(a2); // post

// // decremental, pre and post

// console.log(--a1);
// console.log(a1); // pre
// console.log(a2--);
// console.log(a2); // post



let g = 10;
let h = 25;
let i = g >= h;
console.log(i);