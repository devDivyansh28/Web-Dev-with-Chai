const omkar = {
  name: "Omkar",
  generation: "grandfather",
  cookTraditionalDish() {
    return `${this.name}  cooks an ancient family recipe`;
  },
};

const rohit = Object.create(omkar); // it assign all properties of object omkar to rohit...we can also override those properties...
// Means all prototype chain of omkar will also be get copied to rohit object

console.log(omkar);
console.log(rohit); // Property has assigned to it if you print property it will print those but abhi ye paisa khud ka nhi hai black money hai to show nhi kr skta...but it have money which can be access using object.key or we can also override them
rohit.name = "rohit";
rohit.generation = "father";
rohit.runBusiness = function () {
  return `${this.name} runs the family business`;
};

console.log(rohit);
console.log(rohit.cookTraditionalDish());

const divyansh = Object.create(rohit);

divyansh.name = "Divyansh";
divyansh.generation = "Son";
divyansh.makeFilm = function () {
  return `${this.name} directs blockbustur movies`;
};

console.log(divyansh);
console.log(divyansh.makeFilm());
console.log(divyansh.runBusiness());
console.log(divyansh.cookTraditionalDish());

console.log("*******Writing Prototypes*********");

Array.prototype.divyansh = () => {
  return "Yes Divyansh is now inside Array";
}; // This is what we call prototyping or polyphills we can write these for everything...

console.log(Array.prototype.divyansh());

Array.prototype.college = "CSJMU"; // You are not believing that we are adding new properties to datatypes they are used to write own polyphills if some browser not support already defined polyphills
console.log(Array.prototype.college);

console.log([1, 3, 4].divyansh());
console.log([1, 3, 4].college);

String.prototype.addStar = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(`*****${this[i]}*****`);
  }
};

"divyansh".addStar(); // Yaaaad rakhna tumhey yahan "divyansh".prototype.addStar() nhi likhna kyonki wo hm already define krchukey hain yahan bss use krna hai...

//----------------------------------------

// String.prototype.getlastchar = () => (this[this.length-1]); // Dekha ye kaam nhi krega kyonki arrow functions ke paas this ka acces nhi hota hai...😁

// console.log("Computer Science".getlastchar());

//-------------------------------------------

String.prototype.getLastChar = function () {
  return this[this.length - 1];
};

console.log("Divyansh".getLastChar());

Array.prototype.getLastElement = function () {
  console.log( this[this.length -1]);
};

["hello","sharma","ji","Are","you","enjoying"].getLastElement();
