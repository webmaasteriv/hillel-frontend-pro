"use strict";

const email = "webmaster.igor.voronkov@gmail.com";
const password = "123qwerty";
let isEmailVerified = true;

let canLogin = email.length > 0 && password.length > 0 && isEmailVerified;

if(canLogin){
    console.log("Логін успішний");
} else {
    console.log("Перевірте дані");
}