"use strict";

const age = prompt('Який ваш вік?', '');
let isValidAge;

if(age === null){
    isValidAge = false;
} else if(age.trim() === '') {
    isValidAge = false;
} else if(isNaN(age)){
    isValidAge = false;
} else if(!isFinite(age)){
    isValidAge = false;
} else if (!Number.isInteger(+age)){
    console.log('It`s not an integer');
    isValidAge = false;
} else {
    isValidAge = true;
}

if(isValidAge){
    if(age < 0){
        alert('Такого віку не існує');
    } else if( age >= 0 && age <= 6){
        alert('Дошкільник');
    } else if(age >= 7 && age <= 17){
        alert('Неповнолітній');
    } else if(age >=18 && age <= 64){
        alert('Дорослий');
    } else if(age >= 65 && age <= 120){
        alert('Пенсіонер');
    } else if(age > 120){
        alert('Ви точно не бот?');
    }

    const canDrive = age >= 18 ? 'Може керувати авто' : 'Не може керувати авто';
    const ticket =  age < 7 ? 'Квиток: 0 грн' :
                        (age >= 7 && age <=17) || age >= 65 ? 'Квиток: 50 грн' : 'Квиток: 100 грн';
    alert(canDrive);
    alert(ticket);
} else {
    alert('Некоректний ввід');
}



