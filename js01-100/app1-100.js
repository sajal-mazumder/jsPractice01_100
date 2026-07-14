
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

// $$$ cls 15, operator, arithmatic operato +, -, /, *, %

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

// asignment operator

// let a = 10;
// let b = 20;
// // a = a + b;
// a += b;
// a *= b;
// a /= b;
// a %=b;
// console.log(a);

// comparison operator

// let p = 10;
// let q = '10';
// console.log(p == q);  // true
// console.log(p === q);  // false
// console.log(p < q);  // false
// console.log(p > q);  // false
// console.log(p <= q);  // true
// console.log(p >= q);  // true
// console.log(p != q);  // false
// console.log(p !== q);  // true

// $$$ cls 16, statement in js ***
 
// let p = 19;
// let q = 30;
// let r = p <= q;
// let s = p >= q;
// let t = p === q;
// let u = p !== q;
// console.log(r, s, t, u);

// $$$ cls 17, math function

// let n = 10;
// console.log(Math.E);  // 2.718281828459045
// console.log(Math.PI);  // 3.141592653589793
// console.log(Math.pow(n, 2));  // 100
// console.log(Math.abs(n));  // 10
// console.log(Math.sqrt(n));  // 3.1622776601683795
// console.log(Math.floor(n));  // 10
// console.log(Math.ceil(n));  // 10
// console.log(Math.round(n));  // 10
// console.log(Math.max(3, 4, 5)); // 5
// console.log(Math.min(2, 4, 6)); // 2


// $$$ cls 18, date function

// let date = new Date();
// console.log(date.toDateString());   // Mon Jul 13 2026
// console.log(date.toISOString());   // 2026-07-13T16:06:40.535Z
// console.log(date.toLocaleString());   // 7/13/2026, 10:06:40 PM
// console.log(date.toLocaleTimeString());   // 10:06:40 PM
// console.log(date.toLocaleDateString());   // 7/13/2026
// console.log(date.toString());   // Mon Jul 13 2026 22:06:40 GMT+0600 (Bangladesh Standard Time)
// console.log(date.toTimeString());   // 22:06:40 GMT+0600 (Bangladesh Standard Time)
// console.log(date.toUTCString());   // Mon, 13 Jul 2026 16:06:40 GMT
// console.log(date.getDate());   // 13
// console.log(date.getDay());   // 1
// console.log(date.getFullYear());   // 2026
// console.log(date.getHours());   // 22
// console.log(date.getMilliseconds());   // 535
// console.log(date.getMonth());   // 6
// console.log(date.getTime());   // 1783958800535


// &&& cls 19, comment
// single line comment 
/*multi 
line 
comment */

// &&& cls 20, chapter 3, logic and condition
/* 1. if condition
2. else condition
3. else if condition 
4. switch statement */

// $$$ cls 21, 22, 23, if condition, else condition, else if condition *** 

// let a = 19;
// let b = 20;

// if (a > b) {
//     console.log(a + ' is greater than' + b);
// }else{
//     console.log(b + ' is greater than ' + a);
// }

// if ( a % 2 === 1) {
//     console.log(a + ' is odd number');
// }else{
//     console.log(a + ' is even number.');
// }

// if ( b * 2 + 1 >= 30) {
//     console.log('true');
// }else{
//     console.log('false');
// }

/* problem 1: An automated home system needs to decide whether to turn on the heating, the cooling, or do nothing.
Inputs: Current Temperature (Number).
Logic to figure out:If the temperature is below 18°C, turn on the "Heating".
If the temperature is between 18°C and 25°C (inclusive), keep the climate control "Off".
If the temperature is above 25°C, turn on the "AC".
Goal: Determine the thermostat action.*/

// let temp = 29;
// if (temp < 18) {
//     console.log('Turn on the Heating');
// }else if ( temp <= 25) {
//     console.log('Keep the climate control off.');
// }else {
//     console.log('It is hot climate, turn on AC');
// }

/* 🔐 Problem 4: Password Validator 
A system checks if a new password meets minimal safety standards.
Inputs: Password Length (Number) and Contains Numbers (True/False).
Logic to figure out:
If the password length is less than 8 characters, return "Too Short".
If the password length is 8 or more characters, check if it contains numbers:
If it has numbers, return "Strong".If it has no numbers, return "Weak".
Goal: Return the correct security label.*/

// let password = 'abehhh####';
// let hasNumber = /\d/.test(password);
// let hasSpecialChar = /[^A-Za-z0-9]/.test(password);

// if (password.length < 8  ) {
//     console.log('Password too short!');
// }else if ( hasNumber === true && hasSpecialChar === true) {
//     console.log('Strong password');
// }else{
//     console.log('Weak password.');
// }



/* 📊 Problem 3: The E-Commerce Shipping Calculator 
An online store determines shipping costs based on the total purchase price and membership level.
Inputs: Order Total (Number) and Is VIP Member (True/False).
Logic to figure out:
If the customer is a VIP Member, shipping is completely free (£0), no matter the order total.If they are not a VIP member, look at the order total:Orders £50 or more get free shipping (£0).Orders under £50 cost £5 for shipping.
Goal: Determine the final shipping cost.*/

// let order = 30;
// let isVIP = false;
// if (isVIP === true) {
//     console.log('Cost of total shipping is 0. VIP customer.');  
// }else if (order >= 50) {
//     console.log('Cost of total shipping is 0');
// }
// else {
//     console.log('Cost of total shipping is ' + order * 5);
// }

/* 🎬 Problem 2: Cinema Ticket Pricing 
A cinema offers various discounts based on age and student status.
Inputs: Age (Number) and Is Student (True/False).
Logic to figure out:
Children under 12 years old get a ticket for £6.
Seniors aged 65 and older get a ticket for £8.
For everyone else (ages 12 to 64): If they are a student, they pay £10. If they are not a student, they pay £13.
Goal: Determine the ticket price.*/

// let age = 70;
// let isStudent = true;

// if (age < 12) {
//     console.log('ticket price 6$');
// }else if (age >= 65) {
//         console.log('ticket price 8$');
// }else{
//      if (isStudent) {
//         console.log('ticket price is 10$');
//     }else{
//     console.log('ticket price is 13$');
//     }
// }


/*problem 1: A smart toll booth calculates fees based on the vehicle type and the time of day.
Inputs: Vehicle Type ("Car", "Truck", or "Motorbike") and Peak Hours (True/False).
Logic to figure out:
Motorbikes always pay £2.
Trucks always pay £10.
Cars pay £5 during non-peak hours, but if it is peak hours, they pay £8.
Goal: Determine the correct toll amount for a given vehicle.*/

// let vehicles = 'car';
// let peakHour = true;

// if ( vehicles === 'truck') {
//     console.log('pay 10$');
// }else if (vehicles === 'motorbike') {
//     console.log('pay 2 $');
// }else if( vehicles === 'car'){
//     if (peakHour) {
//         console.log('pay 8$');
//     }else{
//         console.log('pay 5$');
//     }
// }

//  cls 24, switch statement

// let date = new Date();
// switch (date.getDay()) {
//     case 0:
//         console.log('sunday');
//         break;
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;

//     default:
//         console.log('unwanted number');
//         break;
// }


/*1. Traffic Light Simulator
Accept a string variable representing a traffic light color ("red", "yellow", or "green"). 
Log "Stop", "Slow down", or "Go" respectively. 
Include a fallback message for any invalid color.*/

// using switch statement

// let lightColor = 'green';
// switch (lightColor) {
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow':
//         console.log('slow down');
//         break;
//     case 'green':
//         console.log('go go go!');
//         break;

//     default:
//         console.log('invalid color');
//         break;
// }

// using if else condition

// if (lightColor === 'red') {
//     console.log('stop');
// }else if (lightColor === 'yellow') {
//     console.log('slow down');
// }else if (lightColor === 'green') {
//     console.log('go');
// }else{
//     console.log('invalid color');
// }

/* 2. Movie Rating Guide
Accept a letter grade representing a movie rating ("G", "PG", "PG-13", or "R"). 
Log a short description of who is allowed to watch it. 
Handle unknown rating codes gracefully.*/

// let movieRate = 'w';
// switch (movieRate) {
//     case 'G':
//         console.log('General Audience.(All ages admitted).');
//         break;
//     case 'PG':
//         console.log('Parental Guidance.(Some metarials may not suitable for children).');
//         break;
//     case 'PG-13':
//         console.log('Parents strongly cautiioned. some metarials may not appropriate for children under 13.');
//         break;
//     case 'R':
//         console.log('Restricted. Under 17 requires accompanying parents or adult gurdains.');
//         break;
//     default:
//         console.log('Unknown rating.');
//         break;
// }

// using if else condition 

// if (movieRate === 'G') {
//     console.log('General Audience.(All ages admitted).');
// }else if (movieRate === 'PG') {
//     console.log('Parental Guidance.(Some metarials may not suitable for children).');
// }else if (movieRate === 'PG-13') {
//     console.log('Parents strongly cautiioned. some metarials may not appropriate for children under 13.');
// }else if (movieRate === 'R') {
//     console.log('Restricted. Under 17 requires accompanying parents or adult gurdains.');
// }else{
//     console.log('Unknown rating.');
// }

/* 3. Basic Calculator
Accept two numbers and a math operator string ("+", "-", *, or "/"). 
Perform the correct arithmetic operation based on the operator and print the result.*/

// let a = 10;
// let b = 5;
// let operator = '/';
// switch (operator) {
//     case '+':
//         console.log('the sum of a and b is ' + (a + b));
//         break;
//     case '-':
//         console.log('the difference of a and b is ' + ( a - b));
//         break;
//     case '*':
//         console.log('the multi of a and b is ' + ( a * b));
//         break;
//     case '/':
//         console.log('the division of a and b is ' + ( a / b));
//         break;
//     case '%':
//         console.log('the modulu of a and b is ' + ( a % b));
//         break;
//     default:
//         console.log('unwanted operator.');
//         break;
// }

/* 4. Gym Membership Tier
Accept a membership level number (1 for Bronze, 2 for Silver, 3 for Gold). 
Log the specific perks for that tier.
 Make sure that higher tiers automatically inherit ("fall through" intentionally into) the perks of the lower tiers.*/

 let tier = 5;
 switch (tier) {
    case 3:
        console.log('you will get gold facilities.');
        
    case 2:
        console.log('you will get silver facilities.');

    case 1:
        console.log('you will get bronze facilities.');
        break;
    default:
        console.log('please select 1, 2, or 3.');
        break;
 }