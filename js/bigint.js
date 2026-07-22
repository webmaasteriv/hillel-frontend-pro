"use strict";

const bigInteger1 = 10n;
const bigInteger2 = BigInt(20);

console.log('Big integer 1', bigInteger1);
console.log('Big integer 2', bigInteger2);

console.log('Types of big integer 1 and big integer 2: ', '1:', typeof bigInteger1, '2:', typeof bigInteger2);

// now summarizing working properly cause we using BigInt which support any size of number blocked only by memory size
const bigIntMaxSInt = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntMaxSInt + 1n);
console.log(bigIntMaxSInt + 2n);
console.log(bigIntMaxSInt + 3n);
console.log(bigIntMaxSInt + 4n);
console.log(bigIntMaxSInt + 5n);

// when checking strict equality we get false because we have diferent types of variables  
const a = 10n;
const b = 10;
console.log('Strict equality with types', a === b);
console.log('Abstract equality', a == b);
console.log('Type of a: ', typeof a);
console.log('Type of b: ', typeof b);

// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// const result = 10n + 5;
// console.log('BigInt plus number: ', result);



