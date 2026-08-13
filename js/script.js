"use strict";

let i = 20;
while ( i <= 30 ){
    console.log(i);
    i += 0.5;
}

const dollar = 27;
let j = 10;
do{
    let result = dollar * j;
    console.log(`${j}$ = ${result}UAH`);
    j += 10;
} while(j <= 100)


const N = 50;

for (let i=1; i <=100; i++){
    if(i*i <= N){
        console.log(i);
    }
}

function isSimple(n){
    if(n <= 1) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    for (let i = 3; i < n; i++){
        if(n % i === 0) return false;
    }
    return true;
}
const number = +prompt('Введіть число, щоб перевірити просте воно чи ні', '');
console.log(`${number} - ${isSimple(number) ? 'просте число' : 'не просте число'}`);

const number2 = +prompt('Введіть число, щоб перевірити чи можна його отримати шляхом возведення 3ійки в ступень', '');
let k = 1;
let found = false;
while(Math.pow(3,k) <= number2){
    if(Math.pow(3,k) === number2){
        console.log(`так можна: ${number2} = 3 в ступені ${k}`);
        found = true;
        break;
    }
    k++;
}

if(!found){
    console.log('Ні, не можна');
}


