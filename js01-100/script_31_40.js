// cls 31, do while looop #####

// let isRunning = false;

// do{
//     console.log('i am runnig');
//     console.log('i am also running');
// }while (isRunning);

// cls 32, nested loop #####

// let n = 5;
// for(let i = 1; i <= n; i++){
//     // console.log(i); // working

//     // for(let j = 1; j <= i; j++){
//     //     console.log(j);
//     // } // working

//     // if want to print as traingle, do this

//     let result = '';
//     for(let j = 1; j <= i; j++){
//         result += j + ' ';
//     }
//     console.log(result); // working
// }

// let n1 = 20;
// for(let i = 1; i <= n1; i++){
//     let result = '';
//     for(let j = 1; j <= i; j++){
//         result += j + ' ';
//     }
//     console.log(result);
// }

// let n3 = 8;
// for( let i = 1; i <= n3; i++){
//     let result = '';
//     for( let j = 1; j <= i; j++){ // also can be j <= n3;
//         result += '# '
//     }
//     console.log(result);
// }

// let n4 = 8;
// for(let i = 1; i <= n4; i++){
//     let result = '';
//     for( let j = 1; j <= i; j++){
//         result += '* '
//         let result1 = '';
//         for(let k = 1; k <= j; k++){
//             result1 += '# '
//         }
//         console.log(result1);
//     }
//     console.log(result);
// }


// let n4 = 8;

// for (let i = 1; i <= n4; i++) {
//     let result = '';
    
//     // Pick the character based on odd or even line number
//     let charToPrint = (i % 2 !== 0) ? '* ' : '# ';
    
//     // Build the line with the chosen character
//     for (let j = 1; j <= i; j++) {
//         result += charToPrint;
//     }
    
//     console.log(result);
// }


// let n5 = 10;
// for( let i = 1; i <= n5; i++){
//     let result = '';
//     let charPoint = ''
//     if ( i % 3 === 1) {
//         charPoint = '* ';
//     }else if ( i % 3 === 2) {
//         charPoint = '# '
//     }else{
//         charPoint = '@ '
//     }
//     for( let j = 1; j <= i; j++){
//         result += charPoint;
//     }
//     console.log(result);
// }

// let n6 = 12;
// for( let i = 1; i <= n6; i++){
//     let result = '';
//     let number = ( i % 2 === 1 ) ? 1 : 2;
//     for( let j = number; j <= i; j += 2){
//         result += j + ' ';
//     }
//     console.log( result);
// }

// cls 33, break statement $$$$$$

// let isRunning = true;
// while(isRunning){
//     let rand = Math.floor(Math.random() * 10 +1);
//     if(rand === 8){
//         console.log('go to home');
//         isRunning = false;
//     }else{
//         console.log('your random number is ' + rand);
//     }
// } // this code can write with break statement

// while(true){
//     let randm = Math.floor(Math.random() * 10);
//     if (randm === 5) {
//         console.log('go to your bari');
//         break;
//     }else{
//         console.log('your random token is ' + randm);
//     }
// }

// for( let i = 1; i < 10; i++){
//     if (i % 7 === 0) {
//         break;
//     }else{
//         console.log(i);
//     }
// }

// for ( let i = 1; i <= 30; i +=2){
//     if (i % 25 === 0) {
//         break;
//     }else{
//         console.log('token ' + i);
//     }
// }


// ### cls 34, continue statement ***

// let p = 0;
// while (p <= 10) {
//     if(p === 3 || p === 7){
//         p++;
//         continue;
//     }else{
//         console.log(p);
//         p++;
//     }
// }

// for(let i = 0; i <= 10; i++){
//     if (i === 2 || i === 5) {
//         continue;
//     }else{
//         console.log(i);
//     }
// }


// let t = 10;
// do{
//     if ( t === 4) {
//         t--;
//         continue;
//     }else{
//         console.log(t);
//         t--;
//     }
// }while( t > 0);

// $$$$ cls 35, infinity for loop ****

// for( ; ; ){
//     var random = Math.floor(Math.random() * 5 +1);
//     if (random === 2) {
//         console.log('winner!');
//         break;
//     }else{
//         console.log('your number is ' + random);
//     }
// }


// ### chapter 5; cls 36, string***

// ### cls 37, string leteral vs constructor;

// // string literal
// let str = 'abd';
// // constructor
// let str1 = String('abcdef')
// console.log(str, str1);
// let n = 10;
// let str2 = String(n); // as string
// console.log(str2);
// let str3 = new String(n);
// console.log(str3); // as an array
// let str4 = new String(n);
// console.log(str4.toString(n)); // as string
// let str5 = toString(n);
// console.log(str5); // object undefined
// console.log(n.toString()); // as string

// %%% cls 38, escape notation

// let string = 'This i a line of String';
// use single qoute in a fixed word we can use back slash
// let string = 'This i a line of \'String\'';
// put a fixed word in a new line we can use back slash and n
// let string = 'This i a line of \nString';
// put a tab we can use back slash and t
// let string = 'This i a line of \tString';
// use a back slash before fixed word we can use double back shash
let string = 'This i a line of \\String';
console.log(string);


// $$$ cls 39, string comparison

// let str01 = 'i love bangladesh';
// let str02 = 'I Love Bangladesh';
// console.log(str01 === str02);
// console.log(str01 > str02);
// console.log(str01 < str02);
// console.log(str01 >= str02);
// console.log(str01 <= str02);

// ### cls 40, string mehtods ***

let a = 'Sajal';
let b = 'Mazumder';
let c = a + ' ' + b;
let d = a.concat(' ', b); // concat method
console.log(c, d);
console.log(c.length); // length of string
let e = c.substr(4);
let f = d.substring(8);
console.log(e, f);
console.log(e.charAt(7));
console.log(d.charCodeAt(5)); // 32
console.log(c.toLowerCase(), d.toUpperCase());
console.log('   abcdef   '.trim());
console.log(d.split(' '));
console.log(c.startsWith('s')); // case sensitive answer
console.log(d.endsWith('r'));
