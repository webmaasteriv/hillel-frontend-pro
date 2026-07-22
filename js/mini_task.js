"use strict";

const price = 19999;
const priceTwo = 50;
const priceThree = 100_000;
const priceFour = 7;

console.log(`Ціна товару: ${Math.floor(price/100)} грн ${price % 100} коп.`);
console.log(`Ціна товару: ${Math.floor(priceTwo/100)} грн ${priceTwo % 100} коп.`);
console.log(`Ціна товару: ${Math.floor(priceThree/100)} грн ${priceThree % 100} коп.`);
console.log(`Ціна товару: ${Math.floor(priceFour/100)} грн ${priceFour % 100} коп.`);