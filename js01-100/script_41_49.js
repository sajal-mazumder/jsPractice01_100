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

// let arr = [1, 2, 3, 4, 54, 5, 6, 7, 76];
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


// $$$ cls 46, search value in and array ***

// let array = [3, 5, 44, 33, 24, 65, 665, 54, 54, 6, 66, 33];
// let find = 54;
// let isFound = false;
// for(let i = 0; i <= array.length; i++){
//     if (array[i] === find) {
//         console.log('data found in index no ' + i);
//         isFound = true;
//         // break; // only shows one result, if want to show multi result stop break.
//     }
// }
// if (!isFound) {
//     console.log('no data found');
// }

// let i = 0;
// while (i < array.length) {
//     if (array[i] === find) {
//         console.log('data found at ' + i);
//         isFound = true;
//     }
//     i++;
// }
// if (!isFound) {
//     console.log('data not found');
// }

// $$$$$ cls 47, multi dimensional array ****

// let arr = [
//     [34, 55, 64, 56, 76],
//     [54, 65, 42, 36, 67],
//     [67, 73, 42, 48, 64],
//     [90, 86, 54, 34, 36]
// ]
// for( let i = 0; i < arr.length; i++){
//     // console.log(arr[i]); 
//     for( let j = 0; j < arr[i].length; j++){
//         console.log('element at index no ' + i + ' : ' +arr[i][j]);
//     }
// }

// let i = 0;
// while(i < arr.length){
//     let j = 0;
//     while (j < arr[i].length) {
//         console.log('element at index no ' + i + ' ' + arr[i][j]);
//         j++;
//     }
//     i++;
// }


// %%% cls 48, reverse an array ***

// using for loop
// let arr = [3,4,5,6,7,8,9];
// for(let i = 0; i < arr.length / 2; i++){
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 -i];
//     arr[arr.length - 1 - i] = temp;
// }
// console.log(arr);
// console.log(arr.reverse()); // builtin method


// using while loop
// let arr = [3,4,5,6,7,8,9];
// let i = 0;
// while(i < arr.length / 2){
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 -i];
//     arr[arr.length - 1 -i] = temp;
//     i++;
// }
// console.log(arr);

// using do while loop
// let arr = [3,4,5,6,7,8,9];
// let i = 0;
// do{
//    let temp = arr[i];
//     arr[i] = arr[arr.length - 1 -i];
//     arr[arr.length - 1 -i] = temp;
//     i++; 
// }while (i < arr.length / 2) {
//     console.log(arr);
// }

// $$$ cls 49, array methods ***

let arr = [ 3, 4, 56, 6, 7];
let arr2 = [2, 3, 4, 6, 7, 5];
// console.log(arr.join(' ')); // we can use any symbol into qoutation
// console.log(arr.fill(0)); // every element replaced with 0, we can use any type of data into fill
// console.log(arr.concat(arr2));
// let arr3 = arr.concat(arr2);
// console.log(arr3);

// console.log(Array.isArray(arr)); // return true or false
// let arr4 = Array.from(arr);
// arr4[2] = 678;
// // console.log(arr4);
// console.log(arr); // data not changed 
// console.log(arr4); // create new array from arr and data replaced as wanted
