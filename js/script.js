"use strict";

const arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const sumAndCount = (arr) => {
    const positive = arr.filter((el)=>el > 0);
    console.log('Positive numbers in array: ', positive.length);
    const sum = positive.reduce((sum,curr)=> sum + curr,0);
    console.log('Sum of positive numbers: ', sum)
}

sumAndCount(arr);

const min = (arr) =>{
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    console.log(`Minimal element is ${min} with index: ${index}`);
}

min(arr);

const max = (arr) =>{
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    console.log(`Maximum element is ${max} with index: ${index}`);
}

max(arr);

const negative = (arr)=>{
    const negative = arr.filter((el)=>el<0);
    console.log(`${negative.length} total number of negative elements.`);
}

negative(arr);

const oddPositive = (arr) => {
    const oddPositive = arr.reduce((count,curr)=>{
        return curr > 0 && curr % 2 !== 0 ? count + 1 : count;
    }, 0);

    console.log(`Total odd positive numbers is ${oddPositive}`);
}

oddPositive(arr);

const evenPositive = (arr) => {
    const evenPositive = arr.reduce((count,curr)=>{
        return curr > 0 && curr % 2 === 0 ? count + 1 : count;
    }, 0);

    console.log(`Total even positive numbers is ${evenPositive}`);
}

evenPositive(arr);

const evenPositiveSum = (arr) => {
    const sum = arr.reduce((sum, current)=>{
        return current > 0 && current % 2 === 0 ? sum + current : sum;
    }, 0)

    console.log(`Sum of even positive numbers is ${sum}`);
}

evenPositiveSum(arr);

const oddPositiveSum = (arr) => {
    const sum = arr.reduce((sum, current)=>{
        return current > 0 && current % 2 !== 0 ? sum + current : sum;
    }, 0)

    console.log(`Sum of odd positive numbers is ${sum}`);
}

oddPositiveSum(arr);

const multiplyPositives = (arr) => {
    const result = arr.reduce((multiply, current)=>{
        return current > 0 ? multiply * current : multiply;
    }, 1)

    console.log(`Multiplying of positive numbers is ${result}`);
}

multiplyPositives(arr);

const nulledExceptMax = (arr) => {
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    const nulledArray = arr.map((el, ind)=>{
        if(ind === index){
            return el;
        } else {
            return 0;
        }
    });

    console.log(`Nulled array with max: ${nulledArray}`);
}

nulledExceptMax(arr);