// console.log('for loop');

// for loop practicing start 

let sum = 0;

for( let i = 1; i <= 10; i++){
    // console.log(i);
    console.log( sum + ' + ' + i + ' = ' + (sum + i));
    sum = sum + i;
}
console.log('result = ' + sum);


for( let i = 10; i >=1; i--){
    console.log(i);
}


/*
Imagine you are building a system for a gym. Only people who are 18 years or older can enter. Let's look at how we can use a loop to check multiple ages automatically:
*/

let age = 13;

for( let i = 0; i < age; i++){
    if (age >= 18) {
        console.log('gym is open for u.');
    }else{
        console.log('Access denied. too young.');
    }
}

for (let age = 15; age <= 20; age++) {
    if (age >= 18) {
        console.log("Age " + age + ": Access Granted! ✅");
    } else {
        console.log("Age " + age + ": Access Denied! ❌ too young.");
    }
}