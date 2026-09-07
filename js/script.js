"use strict";

const useShift = (array) => {
    const result = array[0];

    for(let i = 1; i < array.length; i++){
        array[i - 1] = array[i];
    }

    array.length--;

    return result;
}

const array = [0,1,2,3,4,5];

console.log('useShift: ', useShift(array));
console.log('Array: ',array);

const useReverse = (arr) => {
    let item;
    for(let i = arr.length - 1; i >= Math.ceil((arr.length - 1) / 2); i--){
        item = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = item;
    }

    return arr;
}

console.log('reversed: ', useReverse(array));
console.log('reversed: ', useReverse([0,1,2,3,4,5,6,7]));