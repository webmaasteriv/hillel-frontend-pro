"use strict";

console.log('Ціле додатне:', 42);
console.log('Ціле відємне:', -42);
console.log('Число з плаваючою крапкою;', 1.005);
console.log('Дуже велике число, записане через e',2e7);
console.log('Дуже мале число, записане через e-',2e-5);
console.log('Велике число, з роздільником-', 100_000_000_000);

let infinity = 10/0;
let minusInfinity = 10/-0;
let notANumber = 'text' - 5;
console.log('Infinity', infinity);
console.log('Minus Infinity', minusInfinity);
console.log('not a number', notANumber);

// expected 0.3 but get 0.30000000000000004, because 0.1 and 0.2 impossible to write precisly in binary mode 
console.log(0.1 + 0.2);

// summarizing not working for MAX_SAFE_INTEGER, because all integers from -(2^53-1) to 2^53-1 are presented precisly and all over the range are not
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger + 1);
console.log(maxSafeInteger + 2);
console.log(maxSafeInteger + 3);
console.log(maxSafeInteger + 4);
console.log(maxSafeInteger + 5);

// all of them are NaN
console.log(NaN - 5);
console.log(NaN + 5);
console.log(NaN * 5);
console.log(NaN / 5);