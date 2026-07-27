"use strict";

const describe = (value) =>{
    const type = typeof value;
    if(value === null){
        console.log(`Тип: null, Значення: ${value}`);
        return;
    }
    if(Number.isNaN(value)){
        console.log(`Тип: NaN, Значення: ${value}`);
        return;
    }
    if(type == 'object'){
        if(Array.isArray(value)){
            console.group(`Тип: Array, Значення: ${value}, Кількість елементів: ${value.length}`);
            value.forEach((el)=>{
                describe(el);
            })
            console.groupEnd();
        } else {
            console.group(`Тип: Object, Значення: {${Object.entries(value).map((element)=> element[0] + ':' + element[1])}}, Ключі: ${Object.keys(value)}`);
            for(const key in value){
                describe(value[key]);
            }
            console.groupEnd();
        } 
    } else if(type == 'string'){
        console.log(`Тип: ${type}, Значення: ${value}, Довжина: ${value.length}`);    
    } else if(type == 'function'){
        console.log(`Тип: ${type}, Значення: ${value}, Кількість аргументів: ${value.length}`);
    } else if(type == 'symbol'){
        console.log(`Тип: ${type}, Значення: ${String(value)}, Опис символу: ${value.description ?? 'без опису'}`);
    } else if(type == 'bigint'){
        console.log(`Тип: ${type}, Значення: ${value}n`);
    } else {
        console.log(`Тип: ${type}, Значення: ${value}`);
    }
    return;
}