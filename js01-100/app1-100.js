
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

//  let tier = 5;
//  switch (tier) {
//     case 3:
//         console.log('you will get gold facilities.');
        
//     case 2:
//         console.log('you will get silver facilities.');

//     case 1:
//         console.log('you will get bronze facilities.');
//         break;
//     default:
//         console.log('please select 1, 2, or 3.');
//         break;
//  }

/* 5. Fitness Workout Plan
Accept a string for the current day of the week. 
Log "Cardio" for Monday and Wednesday, "Strength" for Tuesday and Thursday, "Yoga" for Friday, and "Rest Day" for the weekend. 
Group the matching days together efficiently.*/

// let date = new Date();
// switch (date.getDay()) {
//     case 0: // sunday
//         console.log('rest');
//         break;
//     case 1: // monday
//     case 3: // wenesday
//         console.log('cardio');
//         break;
//     case 2: // tuesday
//     case 4: // thursday
//         console.log('strenth');
//         break;
//     case 5:
//     case 6:
//         console.log('yoga');
//     default:
//         console.log('invalid number');
//         break;
// }

// let date1 = 'sajal';
// if (date1 === 'sunday') {
//     console.log('chutir din');
// }else if (date1 === 'monday' || date1 === 'wenesday') {
//     console.log('cardio');
// }else if (date1 === 'tuesday' || date1 === 'thursday') {
//     console.log('strenthen');
// }else if (date1 === 'friday' || date1 === 'saturday') {
//     console.log('yoga');
// }else{
//     console.log('invalid day.');
// }

// $$$ cls 25, logical && , || operator

/* 
true && true = true;
true && false = false;
false && false = false;

true || true = true;
true || false = true;
false || false = false;
*/

// let a = 10;
// let b = 15; 
// let c = 20;
// let d = 25;

// if ( a > b && c > d ) {
//     console.log('true');
// }else{
//     console.log('false');
// }

// if ( !(a > b && c > d) ) {
//     console.log('true');
// }else{
//     console.log('false');
// }

// if ( !!(a > b && c > d) ) {
//     console.log('true');
// }else{
//     console.log('false');
// }

// if ( a > b || c < d ) {
//     console.log('true');
// }else{
//     console.log('false');
// }


/*
Problem 1: The Amusement Park Ride
A roller coaster requires a rider to be over 120 cm tall AND accompanied by an adult, OR they can ride alone if they are over 140 cm tall.
Your stats: You are 135 cm tall and you are alone.
Is the final scenario TRUE or FALSE for you being allowed to ride?
*/

// let height = 125;
// let accompany = 'adult';
// if ((height > 120 && accompany === 'young')|| (height > 140 && accompany === 'young')) {
//     console.log('alowed to ride.');
// }else{
//     console.log('you r not allowed to ride alone.');
// }

/*Problem 2: The Online Discount
A website gives a discount if a customer is a new user AND has a promo code. 
Alternatively, they get the discount if they are a VIP member (regardless of the code or user age).
Your stats: You are a new user, you do not have a promo code, and you are a VIP member.
Is the final scenario TRUE or FALSE for you getting the discount?
*/

// let me = 'new user';
// let isVIP = false;
// let hasPromo = true;
// if ( isVIP || (me === 'new user' && hasPromo === true)) {
//     console.log('you r eligible to get discount.');
// }else{
//     console.log('you r not eligible for discount.');
// }


/*Problem 3: The Automated Greenhouse
The watering system turns on if the soil is dry AND the temperature is above 25°C. 
It will also turn on if it is past 8:00 PM (regardless of soil or temperature).
Current status: The soil is wet, the temperature is 30°C, and it is 9:00 PM.
Is the final scenario TRUE or FALSE for the watering system turning on?
*/

// let soil = 'wet';
// let temp = 30;
// let time = 19; // 9 pm according to 24 hour system.
// if (time > 20 || (soil === 'dry' && temp > 25) ) {
//     console.log('watering system turn on');
// }else{
//     console.log('watering system turn off');
// }

/*Problem 4: The Exam Eligibility
To sit for an exam, a student must have paid their fees AND have an attendance over 75%. However, if they have a medical waiver, they only need to have paid their fees.
Your stats: You paid your fees, your attendance is 60%, and you do not have a medical waiver.
Is the final scenario TRUE or FALSE for you being eligible for the exam?
*/

// let paidFees = true;
// let attendence = 60;
// let medicalWaiver = false;
// if ( paidFees === true || (medicalWaiver === true && attendence >= 75)) {
//     console.log('you are eligible for exam.');
// }else{
//     console.log('not eligible for exam.');
// }

/*Problem 5: The Smartphone Unlock
A phone will unlock if Face ID matches OR if the correct PIN is entered. 
However, the phone will absolutely not unlock if the battery is completely dead, no matter what.
Current status: Face ID matches, the PIN is incorrect, and the battery is completely dead.
Is the final scenario TRUE or FALSE for the phone unlocking?
*/

// let battery = false;
// let faceID = true;
// let isPIN = false;

// if (battery === true && (faceID === true || isPIN === true)) {
//     console.log('you can unlock your phone.');
// }else{
//     console.log('failed to unlock phone.');
// }

// if (battery && (faceID || isPIN)) {
//     console.log('unlock');
// }else{
//     console.log('failed.');
// }

/*
প্রবলেম ১: ওটিপি ভেরিফিকেশন (OTP Verification)
একটি অ্যাপে লগইন করতে হলে ইউজারকে অবশ্যই সঠিক ওটিপি (OTP) দিতে হবে। 
তবে ইউজার যদি "Trusted Device" ব্যবহার করে, তবে ওটিপি ছাড়াই লগইন করা যাবে। 
কিন্তু ইউজার যদি সরাসরি ব্লকড (Blocked) থাকে, তবে কোনোভাবেই লগইন করা যাবে না।
*/

// let isBlocked = true;
// let isTrustedDevice = true;
// let isCorrectPin = false;
// if (!isBlocked && (isTrustedDevice || isCorrectPin)) {
//     console.log('login success');
// }else{
//     console.log('login failed.');
// }

/*
প্রবলেম ২: ফ্রি শিপিং (Free Shipping)
একটি ই-কমার্স ওয়েবসাইট ফ্রি শিপিং দেয় যদি অর্ডারের টোটাল খরচ ৫০ ডলারের বেশি হয় AND কাস্টমার যদি একই শহরের (Local) বাসিন্দা হয়। 
অথবা, কাস্টমার যদি Premium Member হয়, তবে যেকোনো খরচেই ফ্রি শিপিং পাবে।
*/

// let isPremium = true;
// let cost = 40;
// let isLocal = true;

// if (isPremium || (cost > 50 && isLocal)) {
//     console.log('free shipping');
// }else{
//     console.log('pay cost for shipping.');
// }

/*
প্রবলেম ৩: রক্তদান eligibility (Blood Donation)
রক্ত দিতে হলে বয়স ১৮ থেকে ৬০ বছরের মধ্যে হতে হবে AND ওজন ৫০ কেজির বেশি হতে হবে। 
কিন্তু গত ৯টি মাসের মধ্যে যদি কোনো ট্যাটূ (Tattoo) করানো হয়ে থাকে, তবে রক্ত দেওয়া যাবে না।
*/

// let age = 50;
// let weight = 65;
// let tattoo = 2;

// if (tattoo > 9 && (age >= 18 && age <= 60) && weight > 50 ) {
//     console.log('donate.');
// }else{
//     console.log('no donate.');
// }

/*
প্রবলেম ১: এটিএম বুথ থেকে টাকা তোলা (ATM Withdrawal)
একটি এটিএম বুথ থেকে টাকা তুলতে হলে ইউজারকে অবশ্যই সঠিক পিন (Correct PIN) দিতে হবে। 
এরপর বুথে পর্যাপ্ত টাকা (Enough Cash) থাকতে হবে। 
তবে ইউজার যদি VIP অ্যাকাউন্ট হোল্ডার হন, তবে বুথে টাকা কম থাকলেও ব্যাংক অন্য ফান্ড থেকে টাকা দিয়ে দেবে (অর্থাৎ বুথের ক্যাশ চেক করার দরকার নেই)।
*/

// let isPIN = true;
// let hasCash = 30000;
// let isVIP = false;

// if (isPIN && (isVIP || hasCash >= 5000)) {
//     console.log('cash out.');
// }else{
//     console.log('sorry!');
// }

/* 
প্রবলেম ২: মুভি থিয়েটারে টিকিট কেনা (Movie Ticket Pricing)
একটি মুভি থিয়েটারে টিকিটের দাম ফ্রী (০ টাকা) হবে যদি দর্শক অনূর্ধ্ব ৫ বছর বয়সী শিশু (Age <= 5) হয় অথবা একজন মিলিটারি মেম্বার (Military Member) হয়। 
কিন্তু যদি থিয়েটারে কোনো Special Screening বা প্রিমিয়ার শো চলে, তবে সবার জন্যই টিকিট কেনা বাধ্যতামূলক (কেউ ফ্রী পাবে না)।
*/

// let age = 13;
// let militaryMember = false;
// let isPremiumShow = false;

// if (!isPremiumShow && (age <= 5 || militaryMember)) {
//     console.log('free ticket.');
// }else{
//     console.log('must buy ticket.');
// }

/*
প্রবলেম ৩: ক্রেডিট কার্ডের অনুমোদন (Credit Card Approval)
একটি ব্যাংক আপনাকে ক্রেডিট কার্ড দেবে যদি আপনার মাসিক আয় ৫০,০০০ টাকার বেশি হয় AND আপনার ক্রেডিট স্কোর ৭০০ এর ওপরে থাকে। 
কিন্তু আপনার যদি আগে থেকে ব্যাংকে কোনো Active Loan Defaulter (ঋণখেলাপী) রেকর্ড থাকে, তবে কোনোভাবেই কার্ড পাওয়া যাবে না।
*/

// let activeLoanDefaulter = true;
// let monthlyIncome = 60000;
// let creditScore = 800;

// if (!activeLoanDefaulter && (monthlyIncome > 50000 && creditScore > 700)) {
//     console.log('can issue card.');
// }else{
//     console.log('can not issue card.');
// }

/*
প্রবলেম ৪: ফ্লাইট বোর্ডিং (Flight Boarding Eligibility)
একজন যাত্রী প্লেনে উঠতে পারবেন যদি তার কাছে বৈধ পাসপোর্ট (Valid Passport) থাকে AND তার কাছে বোর্ডিং পাস (Boarding Pass) থাকে। 
তবে তিনি যদি একজন Enforcement Officer (যেমন পুলিশ/নিরাপত্তা কর্মী) হন এবং ডিউটিতে থাকেন, তবে বোর্ডিং পাস ছাড়াই শুধু পাসপোর্ট দিয়ে প্লেনে উঠতে পারবেন।
*/

// let hasPassport = true;
// let hasBoardingPass = true;
// let isEnforcementOfficer = false;
// if (hasPassport && (hasBoardingPass || isEnforcementOfficer)) {
//     console.log('can entry into plane');
// }else{
//     console.log('can not entry plane.');
// }


/*
প্রবলেম ৫: ই-কমার্স ডিসকাউন্ট (E-commerce Combo Offer)
একটি শপ আপনাকে ডিসকাউন্ট দেবে যদি আপনি কমপক্ষে ৩টি আইটেম কেনেন OR আপনার মোট বিল ৫০০০ টাকার বেশি হয়। 
কিন্তু যদি আপনার কার্টে কোনো Clearance Sale এর আইটেম থাকে, তবে এই অফারটি কার্যকর হবে না (অর্থাৎ কোনো ডিসকাউন্ট পাবেন না)।
*/

// let buyItem = 20;
// let billTotal = 4000;
// let isClearenceSale = false;

// if (!isClearenceSale && (buyItem >= 3 || billTotal > 5000)) {
//     console.log('get 10% discount on total bill.');
// }else{
//     console.log('sorry! no discount applicable.');
// }

/*The Scenario: A library allows you to borrow a book if you have a Library Card AND you have No Overdue Fines. 
However, if you are a Teacher, you can borrow books instantly (even without a card or fines).
*/

let isTeacher = false;
let hasCard = true;
let hasOverdueFines = true;
if (isTeacher || (hasCard && hasOverdueFines)) {
    console.log('take your card.');
}else{
    console.log('sorry! no card for u right now.');
}