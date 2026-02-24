console.log("******** Implementation of My Own Reduce **********");

// Implementation

Array.prototype.myOwnReduce = function (fn, initialValue) {
  let acc = initialValue;
  for (const item of this) {
    acc = fn(acc, item);
  }
  return acc;
};

// Use :

let marks2 = [20, 30, 40, 50, 60];

let finalResult = marks2.myOwnReduce((acc, num) => acc * num, 1);
console.log(finalResult);
