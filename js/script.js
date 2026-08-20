"use strict";

const padString = (str, length, symbol = "*", position = true) => {
        if(str === undefined){
            return 'Error: string undefined';
        }
        if(length === undefined){
            return 'Error: length undefined';
        }
        let symbols = '';
        if(length > str.length){
            let i = length;
            while(i > str.length){
                symbols += symbol;
                i--;
            }
            if(position){
                return str + symbols;
            } else {
                return symbols + str;
            }

        } else {
            return str.substring(0, length);
        }
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
console.log(padString('hello'));
console.log(padString());