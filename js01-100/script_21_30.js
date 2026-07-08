// from cls 20 
// if, else, else if , switch statements 

// ### cls 21, if conditions

// let a = 25;
// let b = 45;

// if (a > b) {
//     // console.log(a + ' is greater than ' + b);
//     console.log('a is greater than b');
// }
// else{
//     console.log('b is greater than a');
// }

// let n = 24;

// if (n % 2 == 1) {
//     console.log(n + ' is odd number');
// }
// else{
//     console.log(n + ' is even number.');
// }

// if (n % 2 === 0) {
//     console.log('n is even number');
// }
// else{
//     console.log('n is odd number');
// }

// // ## cls 22, else conditions

// let n1 = 24;

// if (n1 % 2 == 1) {
//     console.log(n + ' is odd number');
// }
// else{
//     console.log(n + ' is even number.');
// }

// if (n1 % 2 === 0) {
//     console.log('n is even number');
// }
// else{
//     console.log('n is odd number');
// }

// let n2 = 32;

// if (n2 % 2 === 1) {
//     console.log('n2 is odd number');
// }else{
//     console.log('n2 is even number');
// }

// ### cls 23, js else if condition

// let n3 = 30;
// let n4 = 30;
// let n5 = 45;

// if (n3 > n4) {
//     console.log('a is greater than n4');
// }else if (n4 > n3 ) {
//     console.log('n4 is greater than n3');
// }else {
//     console.log('n3 is equal to n4');
// }

// let n6 = 0;
// if (n6 === 0) {
//     console.log('n6 is Zero');
// }else if (n6 % 2 === 0) {
//     console.log('n6 is even number');
// }else{
//     console.log('n6 is odd number');
// }


// ### cls 24, switch statements

// 

// @@@ cls 25, logical operators, && || !

// && and operator, two condition true result is true. one condition false, result false.
// A && B 
// true && true = true
// true && false = false;
// false && true = false;
// false && false = false;

// || or operator, at least one condition is true, result is true.

// A || B
// true || true = true;
// true || false = true;
// false || true = true;
// false || false = false;

// ! not operator, result oposite of the original result

// let s = 10;
// let d = 20;
// let f = 35;
// let g = 30;

// if (s > d && f > g ) {
//     console.log('S is greater than D and F is greater than G');
// }else{
//     console.log('At least one condition is false.');
// }

// if (s > d || f > g ) {
//     console.log('S is greater than D or F is greater than G');
// }else{
//     console.log('At least one condition is false.');
// }

// let check = !(s > d && f > g); // expected false
// console.log(check); // result is true
// // !! operator is used true goes to false.

// let do1 = !(s > d || f > g); // expected true
// console.log(do1); // result is false

// %%% cls 26, ternary operator

// let n55 = 20;
// let result = '';

// if (n55 % 2 === 1) {
//     result = 'Odd'
// }else{
//     result = 'Even'
// }
// console.log(result);

// let n55 = 20;
// let result = '';

// if (n55 % 2 === 0) {
//     result = 'Even'
// }else{
//     result = 'Odd'
// }
// console.log(result);

// this multi line code can write in one single line using ternary operator.

// let rslt = n55 % 2 === 0 ? 'Even' : 'Odd';
// console.log(rslt);

// let age = 20;
// let status = (age > 25) ? 'adult' : 'younger';
// console.log(status);

// let score = 50;
// let scoreResult = score > 45 ? 'good result' : 'bad result';
// console.log(scoreResult);

// let score = 50;
// let scoreResult = '';
// if (score > 60) {
//     scoreResult = 'Good Result';
// }else{
//     scoreResult = 'Bad Result';
// }
// console.log(scoreResult);

// let role = 'admin';
// let access = (role === 'admin') ? 'its okay' : 'not okay';
// console.log(access);

// let count = 0;
// let message = (count === 1) ? 'mesage sent' : 'message failed';
// console.log(message);

// let temp = 35;
// let condition = (temp >= 30) ? 'it is too much hot' : 'it is okay for survive';
// console.log(condition);

// let mathMark = 83;
// let aPlus = (mathMark >= 80) ? 'You obtained A+' : 'Pls improve your result.';
// console.log(aPlus);

// let user = 'login';
// let show = (user === 'login') ? 'Welcome to our community' : 'Please log in.';
// console.log(show);

// let light = 'red';
// let stop = (light === 'red') ? 'Please stop!' : 'You can go now.';
// console.log(stop);

// let charge = '100%';
// let statuss = ( charge <= '70%') ? 'Please charge your mobile' : 'Charge is enough to use.';
// console.log(statuss);

// $$$ cls 27, and or shorthand

// let name = 'Bangladesh';
// let fullName = name;

// if ( name.length === 0) {
//     fullName = 'Sajal'
// }else{
//     fullName = name;
// }
// console.log(fullName);
// this full code can write into one line using or operator short hand

// let fullNme = name || 'sajal';
// console.log(fullNme);

// let isOk = true;
// if ( isOk) {
//     console.log('all is ok');
// }else{
//     console.log('not ok');
// }

// this code also can write in one line using and operator short hand
// isOk && console.log('all is okay');

// &&& cls 28, introduction to loops
// there are tree types of loops
//1. for loop , 2. while loop , 3, do while loop. for loops three types - for, for in, for of.

// *** cls 29, for loop

// let sum = 0;
// for (let i = 0; i <= 20; i++){
//     // console.log(i);
//     console.log(sum + ' + ' + i + ' = ' + (sum + i));
//     sum += i;
// }
// console.log('result = ' + sum);

// let total = 0;
// for(let i = 0; i <= 10; i++){
//     if (i % 2 === 0) {
//         // console.log(i);
//         console.log(total + ' + ' + i + ' = ' + (total + i));
//         total += i;
//     }
// }
// console.log(total);

let oddTotal = 0;
for(let i = 0; i <= 10; i++){
    if (i % 2 === 1) {
        // console.log(i);
        console.log(oddTotal + ' + ' + i + ' = ' + (oddTotal + i));
        oddTotal += i;
    }
}

console.log('Result of oddTotal is ' + oddTotal);