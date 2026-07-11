// ### cls 41, string length **

// let str = 'I am Sajal Mazumder. I am a School Teacher.';
// let length = 0;

// finding length using while loop
// while (true) {
//     if (str.charAt(length) === '') {
//         break;
//     }else{
//         length++;
//     }
// }
// console.log(length);

// finding length using for loop
// for(let i = 0; i <= length; i++){
//     if (str.charAt(length) === '') {
//         break;
//     }else{
//         i++;
//     }
// }
// console.log(length);

// finding length ussing do while loop
// do{
//     if (str.charAt(length) === '') {
//         break;
//     }else{
//         length++;
//     }
// }while(true){
//     console.log(length);
// }

// console.log(str.length); // built in method

// chapter 6, cls 42, array****
// introduction to array

// cls 43, array declaration****

// using leteral 
// let arr = [1, 3, 'sajal', 'borsa', 4, true, null];
// let lastOne = arr.at(-3);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length - 2]);
// console.log(lastOne); // modern method

// using constructor
// let arr2 = Array(1,2,3);
// console.log(arr2);


// $$$ cls 44, array traversing ****

// let arr3 = [1, 2, 3, 4, 3, 5, 6, 7, 3, 5, 7, 4];

// for(let i = 0; i < arr3.length; i++){
//     // console.log(arr3[i]);
//     arr3[i] = arr3[i] + 2; // increasing 2 in every value
// }
// console.log(arr3);

// let sum = 0;
// for( let i = 0; i < arr3.length; i++){
    //     sum += arr3[i];
// }
// console.log(sum);

// let arr3 = [1, 2, 3, 4, 3, 5, 6, 7, 3, 5, 7, 4];
// let sumEven = 0;
// let sumOdd = 0;
// for( let i = 0; i < arr3.length; i++){
//     if (arr3[i] % 2 === 0) {
//         // console.log(arr3[i]);
//         sumEven += arr3[i];
//     }
// }
// console.log(sumEven);

// for( let i = 0; i < arr3.length; i++){
//     if (arr3[i] % 2 === 1) {
//         // console.log(arr3[i]);
//         sumOdd += arr3[i];
//     }
// }
// console.log(sumOdd);

// ### cls 45, array insert, remove and replace ***

let arr = [1, 2, 3, 4, 54, 5, 6, 7, 76];
// insert new data to an fixed index

// arr[3] = 10; // remove relevant data
// arr.push(29); // insert to the last
// arr.unshift(45)  // insert to 0 index
// arr.splice(3, 0, 56) // insert new value to the index 3
// console.log(arr); 

// remove data from a fixed index
// arr.pop() // remove last index data;
// arr.shift() // remove 0 index data
// arr.splice(5, 1) // remove 1 data from 5 no index
// console.log(arr);