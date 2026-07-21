"use strict";


/*
    Constants for name, surname, birthday and favrite color i choose because this data will not change with time, unlike age, residence city and hobby. 
*/
const myName = "Igor";
const surname = "Voronkov";
let age = "37";
let residenceCity = "Lviv";
let hobby = "Cycling";
const birthday = "08.05.1989";
const favoriteColor = "blue";

console.group("About me");
console.log("Name: ", myName);
console.log("Last Name: ", surname);
console.log("Age: ", age);
console.log("Residence City: ", residenceCity);
console.log("Hobby: ", hobby);
console.log("Birthday: ", birthday);
console.log("Favorite Color: ", favoriteColor);
console.groupEnd();

age++;
console.log("Age: ", age);

//Uncaught TypeError: Assignment to constant variable.
// birthday = "09.05.1989";

//Uncaught SyntaxError: Identifier 'residenceCity' has already been declared
// let residenceCity = "Kiyv";

const helloMessage = "Привіт! Мене звати " + myName + " " + surname + ", мені " + age + " років, живу у " + residenceCity + ".";

console.log(helloMessage);


