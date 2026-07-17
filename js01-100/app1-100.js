
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
//          console.log('ticket price is 13$');
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

// let battery = true;
// let faceID = false;
// let isPIN = false;

// if (battery) {
//     if (faceID || isPIN) {
//         console.log('unlock ur phone');
//     }else{
//         console.log('match face id or pin');
//     }
// }else{
//     console.log('can not unlock phone.');
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

// let isTeacher = false;
// let hasCard = true;
// let hasOverdueFines = true;
// if (isTeacher || (hasCard && !hasOverdueFines)) {
//     console.log('take your book.');
// }else{
//     console.log('sorry! no book for u right now.');
// }

/*
Problem 1: The Gym Premium Zone
A gym has a private VIP lounge. 
A member can enter if they have a Premium Membership AND their account is active (not suspended). 
However, any Gym Instructor/Staff can enter the lounge anytime automatically, even if they don't have a membership.
Your stats: You are a regular member, your account is active, and you are not a staff member.
*/

// let isPremiumMember = true;
// let isAccountActive = false;
// let isStuff = false;
// if (isStuff || (isPremiumMember && isAccountActive)) {
//     console.log('VIP lounge entry ok.');
// }else{
//     console.log('no pass.');
// }

/*
Problem 2: The Car Rental
A car rental company will rent you a car if you are over 21 years old AND have a valid driver's license. 
However, if you are an international tourist, you can bypass the age limit but you absolutely must have an international driver's license.
Your stats: You are 19 years old, you are an international tourist, and you have an international driver's license.*/

// let age = 39;
// let hasDriverLicense = true;
// let intLicense = false;
// let intTourist = true;

// if ((intLicense && intTourist) || ( age > 21 && hasDriverLicense)) {
//     console.log('can rent car.');
// }else{
//     console.log('sorry, no car for u.');
// }

/*
Problem 3: The Job Interview Shortlist
A company automatically invites an applicant for an interview if they have a Recommendation Letter from the CEO. 
For regular applicants, they must have a Computer Science Degree AND at least 2 years of experience to get shortlisted.
Your stats: You do not have a recommendation letter, you have a CS degree, and you have 5 years of experience.*/

// let hasRecommendation = true;
// let hasCSDegree = false;
// let hasExperience = true;

// if (hasRecommendation || (hasCSDegree && hasExperience)) {
//     console.log('please attend interview.');
// }else{
//     console.log('u r not eligible for interview.');
// }

/*
📦 Problem 1: The Automated Warehouse Drone
An automated shipping drone will launch to deliver a package if it has High Priority tags. 
For Standard Priority packages, the drone will only launch if the delivery distance is under 5 miles AND the current weather status is Clear.*/

// let isHighPriority = true;
// let deliveryDistance = 6;
// let isWeatherGood = true;

// if (isHighPriority || (deliveryDistance < 5 && isWeatherGood)) {
//     console.log('drone will launch.');
// }else{
//     console.log('sorry! drone will not launch.');
// }

/*
💳 Problem 2: Credit Card Fraud Alert
A bank’s security system automatically triggers a fraud alert if a transaction is flagged as an International Withdrawal. 
For Domestic Transactions, an alert is triggered only if the transaction amount is over $500 AND the user has never shopped at that store before.
*/

// let isInternationalWithdrawal = false;
// let transactionAmount = 400;
// let hasNeverShopped = true;

// if (isInternationalWithdrawal || (transactionAmount > 500 && hasNeverShopped)) {
//     console.log('fraud sacmer.');
// }else{
//     console.log('safe transaction.');
// }

/*
✈️ Problem 3: Flight Boarding Clearance
A passenger is allowed to board an airplane instantly if they have a First Class Ticket. 
For Economy Passengers, they are allowed to board only if they have a Valid Passport AND their carry-on luggage weighs under 10 kg.
*/

// let hasFirstClassTicket = false;
// let hasValidPassport = true;
// let luggageWeights = 12;

// if (hasFirstClassTicket || (hasValidPassport && luggageWeights < 10)) {
//     console.log('u are allowed to board airplane.');
// }else{
//     console.log('u r not allowed to board airplane.')
// };

/*
🚗 Problem 4: Autonomous Car Emergency Braking
An autonomous car triggers its emergency brakes instantly if a Pedestrian is detected in its path. 
For Static Obstacles (like trash cans or cones), the brakes are triggered only if the car's current speed is over 30 mph AND the road conditions are Slippery.
*/

// let isPedestrianDetected = false;
// let currentSpeed = 25;
// let isRoadSlippery = true;

// if (isPedestrianDetected || (currentSpeed > 30 && isRoadSlippery)) {
//     console.log('brake car.');
// }else{
//     console.log('dont brake car.');
// }

/*
🎓 Problem 5: University Scholarship Qualification
A university automatically awards a full scholarship if the student is a Valedictorian of their high school. 
For all other students, they qualify only if they have an SAT Score above 1450 AND their family income is below $40,000.
*/

// let isValedictorian = false;
// let isSATScore = 1550;
// let familyIncome = 45000;

// if (isValedictorian || (isSATScore > 1450 && familyIncome < 40000)) {
//     console.log('get scholarship');
// }else{
//     console.log('pay fees regularly.');
// }

/*
🎮 Problem 1: Movie Ticket Pricing System
A theater decides ticket prices based on age and whether the customer is a student.
Outer Condition: First check if the person is an Adult (age 18 or above) or a Child (under 18).Inner Condition (For Adults): If they are a student, the ticket is $10. 
If they are not a student, the ticket is $15.
Inner Condition (For Children): All children's tickets are $5 (no student check needed).
*/

// let age = 15;
// let isStudent = false;

// if (age < 18) {
//     console.log('ticket price 5$');
// }else if (isStudent) {
//     console.log('ticket price 10$');
// }else{
//     console.log('ticket price 15$');
// }

// using ternary operator

// let ticketPrice = (age < 18) ? '5$' : (isStudent ? '10$' : '15$')
// console.log(ticketPrice);

/*
💳 Problem 2: E-Commerce Premium Shipping
An online shop calculates shipping costs based on the total order amount and VIP membership status.
Outer Condition: First check if the order amount is $100 or more.
Inner Condition (For $100+ orders): If the customer is a VIP, shipping is Free. 
If they are not a VIP, shipping costs $5.
Inner Condition (For under $100 orders): If they are a VIP, shipping costs $10. 
If they are not a VIP, shipping costs $20.
*/

// let totalOrder = 170;
// let isVIP = false;

// if (totalOrder >= 100) {
//     if (isVIP) {
//         console.log('shipping free');
//     }else{
//         console.log('shipping cost 5$');
//     }
// }else if (totalOrder < 100) { // no need this condition, 
// // because under 100 automatically into else block
//     if (isVIP) {
//         console.log('shipping cost 10$');
//     }else{
//         console.log('shipping cost 20$');
//     }
// }

// using ternary operator 

// let shippingCost = (totalOrder >= 100) ?
//  (isVIP ? 'shipping free' : 'shipping cost 5$') :  (isVIP ? 'shipping cost 10$ ' : 'shipping cost 20$' );
//  console.log(shippingCost);

/*
🏦 Problem 3: ATM Cash Withdrawal Security
An ATM checks bank accounts before dispensing cash.
Outer Condition: First check if the entered PIN is correct. If it is wrong, print "Wrong PIN".Inner Condition (If PIN is correct): Check if the account has enough balance for the requested withdrawal amount.
If yes, print "Cash Dispensed".
If no, print "Insufficient Balance".
*/

// let isPinCorrect = false;
// let balanceEnough = 'yes';

// if (isPinCorrect) {
//     if (balanceEnough === 'yes') {
//         console.log('Withdraw ur neccessary balance.');
//     }else{
//         console.log('Insufficient balance.');
//     }
// }else{
//     console.log('Wrong Pin.');
// }

// using ternary operator 

// let logIn = (isPinCorrect) ? (balanceEnough ? 'Withdraw ur money' : 'Insufficient balance') : 'Wrong pin. try again.';
// console.log(logIn);

/*
🔐 Problem 4: Website Admin Panel Access
A security portal controls access to a sensitive dashboard.
Outer Condition: First check if the user is Logged In. If not, print "Please log in first".
Inner Condition (If Logged In): Check the user's role.
If their role is "admin", print "Welcome to Admin Dashboard".
If their role is anything else, print "Access Denied: Admins Only".
*/

// let isLoggedIn = false;
// let isAdmin = false;

// if (isLoggedIn) {
//     if (isAdmin) {
//         console.log('Welcome to Admin dashboard.');
//     }else{
//         console.log('Access Denied: Admins only.');
//     }
// }else{
//     console.log('Please log in at first.');
// }

// using ternary operator

// let signIn = (isLoggedIn) ? ( isAdmin ? 'Welcome to admin dashboard.' : 'Access denied. Admin pannels only.') : 'Please log in first attempt.';
// console.log( signIn);

/*
⛈️ Problem 5: Smart Thermostat Home Climate Control
A smart home system decides whether to turn on the AC or Heater based on temperature and humidity.
Outer Condition: First check if the temperature is above 30°C.
Inner Condition (If above 30°C): If humidity is above 70%, print "Turn on AC (High Power)". Otherwise, print "Turn on AC (Normal Power)".
Inner Condition (If 30°C or below): Print "Turn on Heater".
*/

// let temp = 42;
// let isHumidity = 80;

// if (temp > 30) {
//     if (isHumidity > 70) {
//         console.log('Turn on AC (High Power).');
//     }else{
//         console.log('Turn on AC ( Normal Power).');
//     }
// }else{
//     console.log('Oh! Too cold, Turn on Heater.');
// }

// using ternary operator

// let homeClimateControl = (temp > 30) ? ( isHumidity > 70 ? 'Turn on High power AC' : 'Turn on Normal power AC') : 'Too cold, turn on Heater.';
// console.log(homeClimateControl);


/*
🚀 Problem 1: Space Rocket Launch Command
A space agency launches a rocket based on weather, mechanical readiness, and countdown status.Outer Condition: First, check if the weather is Clear AND the wind speed is under 20 mph. 
If not, print "Launch Aborted: Bad Weather".
Inner Condition: If the weather is good, check the mechanical systems.
If isFuelFull is true AND isEngineReady is true, print "Rocket Launched Successfully!".Otherwise, print "Launch Aborted: Systems Failure".
*/

// let isWeatherClear = true;
// let isWindSpeed = 15;
// let isFuelFull = true;
// let isEngineReady = true;

// using logical operator

// if ((isWeatherClear && isWindSpeed < 20)) {
//     if (isFuelFull && isEngineReady) {
//         console.log('Rocket Launched Successfully.');
//     }else{
//         console.log('Launch Aborted: System Failured.');
//     }
// }else{
//     console.log('Launch Aborted: Bad Weather');
// }

// using ternary operator

// let rocketLaunch = (isWeatherClear && isWindSpeed < 20) ? ((isFuelFull && isEngineReady) ? 'Rocket Launched Successfully.' : 'Launch Aborted: System Failured.') : 'Launch Aborted: Bad Weather';
// console.log(rocketLaunch);

/*
🎮 Problem 2: E-Sports Tournament Eligibility
A gaming tournament checks if a player can enter the Pro Division or the Amateur Division.
Outer Condition: First, check if the player's age is 16 or older. 
If they are under 16, print "Too young to compete".
Inner Condition: If they are old enough, check their game rank score.If their score is above 2500 OR they have a Pro License (hasProLicense === true), print "Welcome to the Pro Division!".Otherwise, print "Welcome to the Amateur Division!".
*/

// let playerAge = 10;
// let gameRankScore = 3000;
// let hasProLicense = false;

// // logical operator

// if (playerAge >= 16){
//     if (gameRankScore > 2500 || hasProLicense) {
//         console.log('Welcome to the Pro Division!');
//     }else{
//         console.log('Welcome to Amateur Division');
//     }
// }else{
//     console.log('Too Young to compete.');
// }

// // using ternary

// let tournamentEligible = (playerAge >= 16) ? ((gameRankScore > 2500 || hasProLicense) ? 'Welcome to the Pro Division!' : 'Welcome to Amateur Division.') : 'Too Young to compete.';
// console.log(tournamentEligible);

/*
🏥 Problem 3: Hospital Emergency Room Triage
An automated hospital system prioritizes patients when they arrive at the emergency room.
Outer Condition: First, check if the patient has a Life-Threatening Emergency (isCritical === true).
If true, print "Admit immediately to ICU!".
Inner Condition: If they are not critical, check their fever temperature.
If their temperature is above 38°C (100.4°F) AND they have a cough (hasCough === true), print "Direct to Fever Clinic".
Otherwise, print "Please wait in the Regular Waiting Room".
*/

// let isCritical = true;
// let feverTemp = 36;
// let hasCough = true;

// // using nested if else and logical operator
// if (isCritical) {
//     console.log('Admit immediately to ICU!');
// }else if (feverTemp > 38 && hasCough) {
//     console.log('Direct to fever Clinic.');
// }else{
//     console.log('Please wait in the regular waiting room.');
// }

// // using ternary

// let patientAdmit = (isCritical) ? 'Admit immediately to ICU!' : ((feverTemp > 38 && hasCough) ? 'Direct to fever clinid' : 'Please wait in the regular waiting room.');
// console.log(patientAdmit);


// %%% and or short hand 

// && first search falsy value, if get falsy value, print it. if get truthy value go to right.
// || search truth value first, if get truthy value, print it. if get falsy value go to right.

// let fruit = 'apple' && 'mango';
// let frt = null && 'bannana'
// console.log(fruit, frt);
// let fish = 'ilish' || 'katla';
// let fsh = "" || 'rui'
// console.log(fish, fsh);

// console.log('apple' && 'mango');

// using && || shorthand

/*
🌐 Problem 1: Profile Display Name (The || Shorthand)
A user is setting up their social media account. 
You want to save their displayName. 
If they provided a custom nickname, use it. 
If their nickname is empty (""), use their email address as a backup default value.
*/

// let nickname = "";
// let emailAddress = 'abc@gamil.com';

// let displayName = nickname || emailAddress; // abc@gmail.com
// let displayName = nickname && emailAddress; // empty
// console.log(displayName);

/*
🔔 Problem 2: Notification Dispatcher (The && Shorthand)
An app wants to send a notification popup to a user. 
However, you must respect their privacy settings. 
Only trigger the function sendNotification() if the variable isNotificationEnabled is true.
*/

// let isNotificationEnabled = true;
// let notification = sendNotification();
// let getNotification = isNotificationEnabled && notification;
// console.log(getNotification);

/*
🛒 Problem 3: Cart Checkout Validation (The && and || Combo)An e-commerce app is determining if the "Checkout" button should be active. The checkout should only proceed if the cart is not empty (isCartEmpty === false). If it proceeds, you want to store the discountCode. If there is no discount code available (empty string ""), automatically apply a default backup code "WELCOME10".
*/


// ***** my imagination and making problem for first time. ***

/* 
For BCS exam application an examini must be Bangladeshi and age less 30. 
For special quota age consider upto 32. 
The examine must complete honors 4th year exam in the circulation given last date of apply.
No 3rd class result accepted in education ssc, hsc.
*/

// using nested and logical operator

// let isBangladeshi = true;
// let hasQuota = true;
// let age = 35;
// let honors4thYearCompleted = true;
// let sscResult = 2;
// let hscResult = 2;

// let maxAge = hasQuota ? 32 : 30;

// if (isBangladeshi) {
//     if (age <= maxAge) {
//         if (honors4thYearCompleted) {
//             // Standard BCS rule: No 3rd class allowed (GPA below 2.0)
//             if (sscResult >= 2 && hscResult >= 2) {
//                 console.log("Application Successful: You are eligible for the BCS exam.");
//             } else {
//                 console.log("Application Failed: 3rd class results are not accepted.");
//             }
//         } else {
//             console.log("Application Failed: You must complete Honors 4th year by the deadline.");
//         }
//     } else {
//         console.log(`Application Failed: Age exceeds the maximum limit of ${maxAge} years.`);
//     }
// } else {
//     console.log("Application Failed: You must be a Bangladeshi citizen.");
// }

/*
A child get its BRC if it borns in Banglades or its parents are Bangladeshi.
If father or mother has their BRC, can apply for childs BRC otherwise first get fathers or mothers BRC.
If child is under 45 days,apply charge free. Age under 3 years and over 45 days charges 200 tk. above 3 years charges 500tk.
*/

// let hasBornInBd = true;
// let isParentAreBd = false;
// let ageInDays = 1460;  //  4 years = 4 * 365
// let hasFatehrBRC = true;
// let hasMotherBRC = false;
// if (hasBornInBd || isParentAreBd) {
//     // console.log('You are primarilly qualified.');
//     if (hasFatehrBRC || hasMotherBRC) {
//         // console.log('You are secondarilly qualified.');
//         if (ageInDays <= .12328) {
//             console.log('Application charge 0 tk.');
//         }else if ( ageInDays <= 1095) {
//             console.log('Application charge 150 tk.');
//         }else{
//             console.log('Application charge 500 tk.');
//         }
//     }else{
//         console.log("First collect your fathers or mothers BRC.");
//     }
// }else{
//     console.log('Bangladesh Law rejects your application.');
// }

/*
To get a personal Loan from a bd bank u must be bangladeshi. You have an account in existing bank. You must provide your valid papers in bank. Finally bank will enquair your income is enough to pay your loan installment. Than bank will approve loan according to your income range.
*/

let isBangladeshi = true;
let hasAccount = true;
let allPapersOk = true;
let hasCurrentLoan = true;
let cibReport = 'ok';
let monthlyIncome = 110000;
let hasNOC = true;

if (isBangladeshi) {
    // console.log('Primarily qualified for personal loan.');
    if (hasAccount) {
        // console.log('Submit your all valid papers and source of income and monthly income range.');
        if (allPapersOk) {
            // console.log('We are waiting your cib report.');
            if (hasCurrentLoan && !hasNOC) {
                console.log('Provide a NOC on current active loan.');
            }else{
                // console.log('We are waiting for ur cib report.');
                if (cibReport === 'ok') {
                    // console.log('Positive cib report. Next steps should be start.');
                    if (monthlyIncome <= 20000) {
                        console.log('can approve 2 lacs tkk.');
                    }else if (monthlyIncome <= 50000) {
                        console.log('can approve 4 lacs tk.');
                    }else{
                        console.log('can approve maximum 10 lacs tk.');
                    }
                }else{
                    console.log('Negetive cib report.');
                }
            }
        }else{
            console.log('Ensure your valid papers please.');
        }
    }else{
        console.log('At first open an accout any of our bank branch.');
    }
}else{
    console.log('Sorry! we can not allow you for a personal loan.');
}

// ternary

let openAccout = (isBangladeshi)? ((hasAccount) ? ((allPapersOk)  ? (((hasCurrentLoan && !hasNOC) ? 'noc ok' : ((cibReport === 'ok') ? ((monthlyIncome <= 20000) ? 'loan 2 lac' : ((monthlyIncome <= 50000) ? 'loan 3 lacs' : 'loan max 10 lacs')) : 'cib not ok' ) )) : 'provide ur valid paper.') : 'open new account' ) :'Sorry! we can not allow you for a personal loan.';
console.log(openAccout);



let openAccout1 = isBangladeshi 
    ? (hasAccount 
        ? (allPapersOk  
            ? ((hasCurrentLoan && !hasNOC) 
                ? 'noc ok' 
                : (cibReport === 'ok' 
                    ? (monthlyIncome <= 20000 ? 'loan 2 lac' 
                    : monthlyIncome <= 50000 ? 'loan 3 lacs' 
                    : 'loan max 10 lacs') 
                    : 'cib not ok')) 
            : 'provide ur valid paper.') 
        : 'open new account') 
    : 'Sorry! we can not allow you for a personal loan.';
    console.log(openAccout1);

    console.log('aple');
    console.log('mango');