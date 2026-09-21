"use strict";

Function.prototype.myCall = function (context, ...args) {
    context = context ?? globalThis;

    const fn = Symbol();

    context[fn] = this;

    const result = context[fn](...args);

    delete context[fn];

    return result;
};

const user = {
  name: 'Igor'
}

function showNameAndAge(age){
  return `${this.name} is ${age} years old!`
}

console.log(showNameAndAge.myCall(user, 25));

Function.prototype.myApply = function (context, args = []) {
    context = context == null ? globalThis : Object(context);

    const key = Symbol();

    context[key] = this;

    const result = context[key](...args);

    delete context[key];

    return result;
};

function greet(city, age) {
    return `${this.name} from ${city}, ${age}`;
}

console.log(
    greet.myApply(user, ["Kyiv", 25])
);

Function.prototype.myBind = function (context, ...bindArgs) {
    const fn = this;

    return function (...args) {
        context = context == null ? globalThis : Object(context);

        const key = Symbol();

        context[key] = fn;

        const result = context[key](...bindArgs, ...args);

        delete context[key];

        return result;
    };
};

const bound = greet.myBind(user, "Odesa");

console.log(
    bound(30)
);

