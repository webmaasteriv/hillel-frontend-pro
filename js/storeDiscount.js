"use strict";

let hasPromoCode = true;
let cartTotal = 105;
let isBlackFriday = false;

let isDiscountApplied;

if((hasPromoCode || isBlackFriday) && cartTotal >= 100){
    isDiscountApplied = true;
} else {
    isDiscountApplied = false;
}

if(isDiscountApplied){
    console.log("Знижка застосована");
} else {
    console.log("Знижка не застосована");
}