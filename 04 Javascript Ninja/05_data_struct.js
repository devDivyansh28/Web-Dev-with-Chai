

let fruits = ['apple','banana','mango','santra','kela','cheeku','👶'];

// console.log(fruits.length);
// fruits.push('aadmin');

// const element = fruits.slice(0,4);
// console.log(fruits);
// console.log(element);

// let print = (element) => console.log(element);

// // fruits.forEach((element) => console.log('element->',element));

// function forEach(btaoKyakrnahai){
//     for(let i = 0 ; i < fruits.length ;i++){
//           btaoKyakrnahai(fruits[i]);
//     }
// }

// forEach(print );

// If we will not use map then we have to do this in place of that...
// const num = [1,2,3,4,5,6,7,8,9];

// const doublenum = [];

// const double = (element) => doublenum.push(element*2);

// function foreach(btaokyakrnahai){
//     for(var i = 0 ; i< num.length ;i++){
//         btaokyakrnahai(num[i]);
//     }
// }

// foreach(double);

// console.log(doublenum);

// But what if we will use map...ussey kya hoga???

// function map(fn){

//     const result = [];

//     for(let i = 0;i< num.length ;i++){
//         newelement = fn(num[i]);
//         result.push(newelement);
//     }

//     return result;
// }


// const finalresult = map((ele) => (ele*3));
// console.log(finalresult);


const nums2 = [3,10,24,90,80,34,67];

const result2 = nums2.forEach(function(e) {
    if( e %2 == 0){
        console.log(e);
    }
})

console.log(result2);