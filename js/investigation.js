"use strict";

let name;
console.log(name);

let name2 = null;
console.log(name2);

function greet(user) {
  console.log('Hello,', user);
}
greet();

function calculate(a, b) {
  return a + b;
  // забули повернути результат окремої змінної
}
console.log(calculate(2, 3));

function calculate2(a, b) {
  let result = a + b;
  // не написали return
}
console.log(calculate2(2, 3));

function calculate3(a, b) {
  return;
}
console.log(calculate3(2, 3));

const user = {
  firstName: 'John',
  lastName: 'Doe'
};
console.log(user.age);

const user2 = {
  firstName: 'John',
  middleName: null,   // розробник свідомо сказав, що середнього імені немає
  lastName: 'Doe'
};
console.log(user2.middleName);

const arr = [10, 20, 30];
console.log(arr[10]);

const user3 = {
  name: 'Anna',
  address: {
    city: 'Kyiv'
  }
};
console.log(user3.address.street);


const describeEmpty = (value) => {
    if(value === null){
        console.log(`Це null — розробник свідомо сказав, що тут порожньо.`);
    } else if (value === undefined){
        console.log(`Це undefined — JavaScript сам поставив або значення не задано`);
    } else {
        const type = typeof value;
        if(type == 'object' && Array.isArray(value)){
            console.log(`Це не є порожнім значенням: <Array, ${value}>`);
        } else {
            console.log(`Це не є порожнім значенням: <${type}, ${value}>`);
        }
    }
}

describeEmpty(null);
describeEmpty(undefined);
describeEmpty(0);
describeEmpty('');
describeEmpty([]);
describeEmpty(false);


// I delete userAge because it's not used in our code and added return statement in getGreeting function which returns message
let userName;
// let userAge;

userName = 'Anna';
console.log('name:', userName);

function getGreeting(name) {
  console.log(`Hello, ${name}`);
  return `Hello, ${name}`;
}

const message = getGreeting('World');
console.log('message:', message);


const user4 = {
  name: 'Anna',
  contact: { email: 'anna@example.com' }
};

const user5 = {
  name: 'Bob'
  // у Боба немає contact взагалі
};

// Треба вивести email обох:
console.log(user4?.contact?.email);   // працює: 'anna@example.com'
console.log(user5?.contact?.email ?? 'Властивості не існує');   // ПОМИЛКА



