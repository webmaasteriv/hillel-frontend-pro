"use strict";

const member1 = {
    id: Symbol('member'),
    name: 'Igor',
    joinDate: '27.07.2026'
}

const member2 = {
    id: Symbol('member'),
    name: 'Volodymyr',
    joinDate: '20.02.2026'
}

const member3 = {
    id: Symbol('member'),
    name: 'Alina',
    joinDate: '02.01.2024'
}

console.group("Members");
console.log('Member 1: ', member1);
console.log('Member 2: ', member2);
console.log('Member 3: ', member3);
console.groupEnd();

const twin1 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

const twin2 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

// I see that ids are diferent no matter that Symbols are look similar with same descriptions, it's because Symbol type are always unique no matter if decscription the same
console.group("Twins");
console.log(twin1 === twin2); // false
console.log(twin1.id === twin2.id); // false
console.log(twin1.name === twin2.name); // true
console.log(twin1.id.description === twin2.id.description); // true
console.groupEnd();

console.group('Attempt to hack system');
const s1 = Symbol('secret');
const s2 = Symbol(s1.description);
console.log(s1 === s2);   // false

const s3 = Symbol('id');
const s4 = Symbol('id');
console.log(s3 == s4);   // false

const s = Symbol('id');
// alert(s);       // Uncaught TypeError: Failed to execute 'alert' on 'Window': Cannot convert a Symbol value to a string
// alert(String(s)); // Symbol('id')
// alert(s.toString()); // Symbol('id')
// alert(s.description); // id

const uniqueKey = Symbol('meta');
const data = {
  publicName: 'Alice',
  [uniqueKey]: 'секретна інформація'
};

console.log(data); // {publicName: 'Alice', Symbol(meta): 'секретна інформація'}
console.log(data[uniqueKey]); // секретна інформація
console.log(data.uniqueKey);   // undefined
console.log(Object.keys(data));
/* ['publicName'], "Приховані" метадані без ризику конфлікту імен. Можна додати службову властивість до об'єкта, не боячись, що вона випадково перезапише чи буде перезаписана чужим кодом, який робить for (let key in obj) або {...obj} для копіювання публічних полів — символьні поля просто ігноруються при такому переборі.
Псевдо-приватність. Якщо ключ (сам Symbol) не експортується з модуля, ззовні до значення практично не дістатися — воно не видно ні в JSON.stringify(), ні в консольному переборі ключів, ні при звичайному копіюванні об'єкта через spread чи Object.assign().
Безпечне розширення чужих об'єктів. Бібліотеки використовують символи, щоб додавати свої внутрішні поля (наприклад, Symbol.iterator для ітераторів) до об'єктів користувача, не побоюючись зіткнення з іменами, які вже є або з'являться в майбутньому.
Якщо все ж треба дістати символьні ключі — є окремий метод саме для цього: Object.getOwnPropertySymbols(data), який поверне [Symbol(meta)]
*/
console.groupEnd();

const memberID4 = Symbol('member4');
const memberID5 = Symbol('member5');
const memberID6 = Symbol('member6');
const memberID7 = Symbol('member7');
const memberID8 = Symbol('member8');

const member4 = {
    id: memberID4,
    name: 'Stepan',
    joinDate: '01.01.2024'
}

const member5 = {
    id: memberID5,
    name: 'Illya',
    joinDate: '01.01.2024'
}

const member6 = {
    id: memberID6,
    name: 'Volodymyr',
    joinDate: '01.01.2024'
}

const member7 = {
    id: memberID7,
    name: 'Oleg',
    joinDate: '01.01.2024'
}

const member8 = {
    id: memberID8,
    name: 'Irina',
    joinDate: '01.01.2024'
}

const members = [member4, member5, member6, member7, member8];

const findMember = (symbolId) => {
     const member = members.find((item)=>item.id === symbolId);
     return member;
}

console.group('Club Registry');
console.log(findMember(memberID4)); // {id: Symbol(member4), name: 'Stepan', joinDate: '01.01.2024'}
console.log(findMember(Symbol('member'))); // undefined
console.groupEnd();

console.group('Symbol.for(key)');
const a = Symbol('shared'); 
const b = Symbol('shared');
console.log(a === b);   // false

const c = Symbol.for('shared');
const d = Symbol.for('shared');
console.log(c === d);   // true
console.groupEnd();

// Symbol.for буде кращим тоді коли треба, щоб два незалежні шматки коду домовились про один і той самий ключ без імпорту спільної змінної — досить узгодити рядок-ключ.
