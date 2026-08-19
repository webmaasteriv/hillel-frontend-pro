"use strict";

const generateKey = (length, characters) => {
    let i = 0;
    let generatedKey = '';
    while(i < length){
        generatedKey += characters[Math.floor(Math.random()*characters.length)]
        i++;
    }
    return generatedKey;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);
