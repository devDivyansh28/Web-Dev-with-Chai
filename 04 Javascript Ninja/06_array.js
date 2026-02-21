

const sharmaji = Array(3);
console.log(sharmaji);

console.log(Array.from("Himanshi"));

let test1 = Array.from("DUST");
console.log(test1.length);
console.log(test1);
test1.length = 5;
console.log(test1);

// Array(5) or Array.of(5,6,6,,753w43);
const test2 = Array.of("Sharma ji hi kehdey hain");
const test3 = Array(3);
console.log(test2)
console.log(test3)


// Shift and Unshift
const test4 = [1,2,3,4,5];
let firstNum = test4.shift();
console.log(test4);
console.log(firstNum);

const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// Expected output: 5

console.log(array);
// Expected output: Array [4, 5, 1, 2, 3]

// splice 

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed ...Here this 0 means no. of elements to be deleted after the start index it is mutating method...it's return value is array


//All the methods we have discussed was mutating method now we discuss non-mutating methods

// 1 . concat 
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

// slice 

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// flat 

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


// We have one more method to copy the array as used in industry is by using slice

const original = [];
const copy = original.slice(); // It will give copy of original to the copy one...

