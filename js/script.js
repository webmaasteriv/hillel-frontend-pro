"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, position) =>{
    if(array === undefined){
        return 'Error: array undefined';
    }
    if(position === undefined){
        return 'Error: position undefined';
    }

    array.splice(position - 1, 1);

    return array;
}

removeElement(array, 5 );
console.log(array); // Результат: [1, 2, 3, 4, 6, 7]
