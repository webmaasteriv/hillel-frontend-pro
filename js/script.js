"use strict";

console.log(parseInt(null, 10)); // NaN
console.log(parseInt(undefined, 10)); // NaN
console.log(parseInt('', 10)); // NaN
console.log(parseInt('   ', 10)); // NaN
console.log(parseInt('42', 10)); // 42
console.log(parseInt('  42  ', 10)); // 42
console.log(parseInt('42abc', 10)); // 42
console.log(parseInt('abc42', 10)); // NaN
console.log(parseInt('3.9', 10)); // 3
console.log(parseInt('-5', 10)); // -5

console.log(Number(null)); // 0
console.log(Number('')); // 0
console.log(Number('42abc')); // NaN
console.log(+null); // 0

console.log(parseInt(null, 36)); // 1112745, тому що строка "null" буде числовим значенням в системі числення з основою 36


let guessedCorrectly = false;
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 5;

do {
    const userGuess = prompt("Вгадай число від 1 до 10:");
    if(userGuess === null){
        alert('Гру завершено!');
        break;
    }
    if(userGuess.trim() === ''){
        alert('Ви нічого не ввели');
        continue;
    }
    if(isNaN(userGuess)){
        alert('Це не число');
        continue;
    }
    if(userGuess < 1 || userGuess > 10){
        alert('Число має бути від 1 до 10');
        attempts--;
        continue;
    }
    if(!Number.isInteger(+userGuess)){
        alert('Введіть ціле число');
        continue;
    }
    if(parseInt(userGuess, 10) > randomNumber){
        alert('Забагато');
    } else if(parseInt(userGuess, 10) < randomNumber){
        alert('Замало');
    }
    if (parseInt(userGuess, 10) === randomNumber) {
        alert("Вітаю! Ви вгадали число!");
        guessedCorrectly = true;
    } else {
        attempts--;
        if(attempts === 0){
            alert(`На жаль, це було число ${randomNumber}`);
            break;
        }
        alert("Спробуйте ще раз.");
    }
} while (!guessedCorrectly);


const timeConverter = ()=>{
    const seconds = prompt('Ввeдіть кількість секунд', '');
    if(seconds === null || isNaN(seconds) || seconds.trim() === '' || !Number.isInteger(+seconds)){
        alert('Некоректний ввід');
    } else {

        let hours = 0;
        let minutes = 0;
        let sec = 0;

        hours = Math.floor(seconds / 3600);
        minutes = Math.floor((seconds % 3600) / 60);
        sec = seconds - hours * 3600 - minutes * 60;
        alert(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`);
    }
}

timeConverter();


const summarizingChars = () =>{
    const number = prompt('Введіть ціле число', '');
    if(number === null || isNaN(number) || number.trim() === '' || !Number.isInteger(+number)){
        alert('Некоректний ввід');
    } else {

        let startNumber = +number;
        let summarizingChars = 0;
        let digitalRootSumm = 0;
        let once = true;
        if(startNumber < 10){
            alert(`${number}: сума цифр: ${startNumber}, цифровий корінь:${startNumber}`);
            return;
        }
        while(digitalRootSumm > 10 || once){
            let num;
            let summarize = 0;
            if(digitalRootSumm === 0){
                num = startNumber;
            } else {
                num = digitalRootSumm;
            }
            while(num > 0){
                summarize += num % 10;
                num = Math.floor(num / 10);
            } 
            if(once){
                summarizingChars = summarize;
                once = false;
            } 
            digitalRootSumm = summarize;
            console.log(`Ланцюжок для ${number}`,digitalRootSumm);
        }
        alert(`${number}: сума цифр: ${summarizingChars}, цифровий корінь:${digitalRootSumm}`);
    }
}

summarizingChars();


const breakingAmount = ()=>{
    const amount = prompt('Введіть сумму в гривнях і ми їх розміняємо', '');
    if(amount === null || isNaN(amount) || amount.trim() === '' || !Number.isInteger(+amount)){
        alert('Некоректний ввід');
    } else {
        const nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];
        const finalResult = {};
        let summary = +amount;
        for(const banknot of nominals){
            if(summary === 0){
                break;
            }
            const nominalAmount = Math.floor(summary / banknot);
            if(nominalAmount === 0){
                continue;
            }
            summary -= nominalAmount * banknot;
            finalResult[banknot] = nominalAmount;
        }
        console.log(`${amount}: ${Object.entries(finalResult).map((i)=>{return i[0] + ':' + i[1]}).reverse().join('; ')}`);
    }
}

breakingAmount();



// я би використовував Number в Production бо parseInt все ж таки призначений для парсингу числа зі строки, до того ж в перевірках ми все одноприводимо строку до Number: if(!Number.isInteger(+userGuess)){}

// do {
//     const userGuess = prompt("Вгадай число від 1 до 10:");
//     if (userGuess === null) {
//         alert('Гру завершено!');
//         break;
//     }

//     const trimmed = userGuess.trim();
//     if (trimmed === '') {
//         alert('Ви нічого не ввели');
//         continue;
//     }

//     const guess = Number(trimmed); // єдине джерело правди для числа

//     if (isNaN(guess)) {
//         alert('Це не число');
//         continue;
//     }
//     if (!Number.isInteger(guess)) {
//         alert('Введіть ціле число');
//         continue;
//     }
//     if (guess < 1 || guess > 10) {
//         alert('Число має бути від 1 до 10');
//         attempts--;
//         continue;
//     }

//     if (guess > randomNumber) {
//         alert('Забагато');
//     } else if (guess < randomNumber) {
//         alert('Замало');
//     }

//     if (guess === randomNumber) {
//         alert("Вітаю! Ви вгадали число!");
//         guessedCorrectly = true;
//     } else {
//         attempts--;
//         if (attempts === 0) {
//             alert(`На жаль, це було число ${randomNumber}`);
//             break;
//         }
//         alert("Спробуйте ще раз.");
//     }
// } while (!guessedCorrectly);

