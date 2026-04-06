"use strict";
const a = 5;
const b = 'hello world';
const c = true;
let d = 555555; // Here type infering will work...
const add = (a, b) => {
    console.log(a + b);
};
add(2, 5);
const uppercaser = (a, b) => {
    let upperCaseA = a.toUpperCase();
    let upperCaseB = b.toUpperCase();
    console.log(upperCaseA + upperCaseB);
};
