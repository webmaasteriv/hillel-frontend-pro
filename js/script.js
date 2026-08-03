"use strict";

const user = {
    name: "Igor",
    age: 37,
    email: "webmaster.igor.voronkov@gmail.com",
    isSubscribed: true,
    balance: "150.25",
    verified: "1"
}

let balance = Number(user.balance);
let {verified} = user;
verified = Boolean(verified);

let accessToService;

if(user.age >= 18 && verified && (user.isSubscribed || balance > 0)){
    accessToService = true;
} else {
    accessToService = false;
}

let equal = user.age == "37";
let strictEqual = user.age === "37";

console.group('Object user');
console.log('accessToService: ',accessToService, 'equal:', equal, 'strictEqual:', strictEqual);
console.groupEnd();
let message;
if(user.age < 18){
    message = 'Access restricted due to age';
}

const order = {
    total: "1050",
    currency: "$",
    isPaid: false,
    delivery: "yes",
    priority: "1"
}

const numberTotal = Number(order.total);
let delivery = order.delivery === "yes" ? true : false;
let priority = Boolean(order.priority);
let isBigOrder = numberTotal > 1000;

let orderMessage;
if(!order.isPaid){
    orderMessage = "Order is not paid. ";
} else {
    if(delivery){
        orderMessage = "Paid order with delivery. ";
    } else {
        orderMessage = "Paid order without delivery. ";
    }
    if(isBigOrder){
        orderMessage += "High-value paid order. ";
    }
    if(priority){
        orderMessage += "[PRIORITY].";
    }
}

const equalTotal = order.total == numberTotal;
const strictEqualTotal = order.total === numberTotal;

console.group('Object order');
console.log('orderMessage: ', orderMessage);
console.log('equalTotal: ', equalTotal);
console.log('strictEqualTotal: ', strictEqualTotal);
console.groupEnd();

const systemSettings = {
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true"
};

const numberFontSize = Number(systemSettings.fontSize);
const betaAccess = systemSettings.betaAccess === "true" ? true : false;
const isLargeFont = Number(systemSettings.fontSize) >= 18 ? true : false;

let systemSettingsMessage;

if(systemSettings.darkMode && isLargeFont){
    systemSettingsMessage = "Dark mode + large font";
} else if (systemSettings.darkMode) {
    systemSettingsMessage = "Dark mode";
} else if (isLargeFont) {
    systemSettingsMessage = "Large font";
} else {
    systemSettingsMessage = "Default settings";
}

if(betaAccess){
    systemSettingsMessage += " (Beta tester)";
}

console.group("systemSettings object");
console.log("systemSettingsMessage: ", systemSettingsMessage);
console.groupEnd();


const orderAccess = order.isPaid || balance >= numberTotal;
const systemAccess = Number(systemSettings.fontSize) > 12 && (systemSettings.language === "en" || systemSettings.language === "uk");
const finalAccess = accessToService && orderAccess && systemAccess;

let finalMessage;
if(finalAccess){
    finalMessage = "Full access granted. ";
} else {
    finalMessage = "Access denied. Blocked by: ";
    if(!accessToService){
        finalMessage += "[user]";
    }
    if(!orderAccess){
        finalMessage += "[order]";
    }
    if(!systemAccess){
        finalMessage += "[system]";
    }
}

console.group("Final Access");
console.log("finalMessage: ", finalMessage);
console.groupEnd();