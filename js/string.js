"use strict";

// the most convinient way to use strings it's backticks
const typeOne = 'Він сказав: "Це — \'звичайна\' помилка."';
const typeTwo = "Він сказав: \"Це — 'звичайна' помилка\".";
const typeThree = `Він сказав: "Це — 'звичайна' помилка".`;

const name = 'Igor';
const age = 37;
const city = "Lviv";

const string = `Привіт! Мене звати ${name}, мені ${age} років, живу у ${city}. ${age * 12}`;
console.log(string);

console.log('String length:', string.length, 'First symbol: ', string[0], 'Fifth symbol: ', string[4], 'Last symbol: ', string[string.length - 1]);

// string.js:19 Uncaught TypeError: Cannot assign to read only property '0' of string 'Hello' 
// First symbol doesn't changes because strings are immutable
// const greeting = 'Hello';
// greeting[0] = 'J';
// console.log(greeting);

