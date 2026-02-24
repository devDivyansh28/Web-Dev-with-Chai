console.log("********Implementation of My Own for Each **********");

// Implementation :
Array.prototype.myOwnForEach = function (fn) {
  for (const item of this) {
    fn(item);
  }
};

// Usage :

let marks = [20, 30, 40, 50, 60];
// I will try to inc. my marks and then print them with the help of my Own for each method() remember that I am not using javascript's foreach...I am propertiary of this myOwnForEach 😎(If i have used emoji please not consider that i have used AI for this...)

marks.myOwnForEach((item) => console.log(item + 50)); // Kyon Hilla Dalla Na...😎😎😎
