

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

