"use strict";

console.group('Investigation');
// 1
console.log('typeof 42', typeof 42)

// 2
console.log('typeof 42n', typeof 42n);

// 3
console.log(`typeof 'hello'`, typeof 'hello'); 

// 4
console.log('typeof true', typeof true);

// 5
console.log('typeof undefined', typeof undefined);

// 6
console.log('typeof null', typeof null);

// 7
console.log('typeof NaN', typeof NaN);

// 8
console.log('typeof Infinity', typeof Infinity);

// 9
console.log(`typeof Symbol('id')`, typeof Symbol('id'));

// 10
console.log('typeof {}', typeof {});

// 11
console.log('typeof []', typeof []); 

// 12
console.log('typeof [1, 2, 3]', typeof [1, 2, 3]);

// 13
console.log('typeof function() {}', typeof function() {});

// 14
console.log('typeof (() => {})', typeof (() => {}));

// 15
console.log('typeof (2 + 2)', typeof (2 + 2));

// 16
console.log(`typeof ('2' + 2)`, typeof ('2' + 2));

// 17
console.log(`typeof ('foo' - 'bar')`, typeof ('foo' - 'bar'));

// 18
let x;
console.log('typeof x', typeof x);

// 19
console.log('typeof nonExistentVariable', typeof nonExistentVariable);

// 20
console.log('typeof typeof 42', typeof typeof 42);
console.groupEnd();

const isReallyArray = (array) => {
    if(typeof array == 'object' && Array.isArray(array)){
        return true;
    }
    return false;
}

console.group('Функція isReallyArray()');
console.log('isReallyArray([1, 2, 3])', isReallyArray([1, 2, 3]));       
console.log(`isReallyArray('hello')`, isReallyArray('hello'));
console.log('isReallyArray({ length: 3 })', isReallyArray({ length: 3 }));
console.log('isReallyArray(null)', isReallyArray(null));
console.log(`isReallyArray('123'.split(''))`, isReallyArray('123'.split('')));  
console.groupEnd();

const whatIsIt = (x)=>{
    const type = typeof x;
    if(type == 'object'){
        if(Array.isArray(x)){
            return 'array';
        }
        if(x === null){
            return 'null';
        }
    }
    return type;
}

console.group('Функція whatIsIt()');
console.log("whatIsIt(42)", whatIsIt(42));
console.log("whatIsIt('hi')", whatIsIt('hi'));
console.log("whatIsIt(null)", whatIsIt(null));
console.log("whatIsIt([1, 2])", whatIsIt([1, 2]));
console.log("whatIsIt({})", whatIsIt({}));
console.log("whatIsIt(() => {})", whatIsIt(() => {}));
console.log("whatIsIt(undefined)", whatIsIt(undefined));
console.log("whatIsIt(NaN)", whatIsIt(NaN));  
console.groupEnd();