// // Understanding temporal Dead zone....

// // TDZ starts at beginning of scope
// const func = () => console.log(letVar); // OK

// // Within the TDZ letVar access throws `ReferenceError`

// func(); // Called outside TDZ!
// let letVar = 3; // End of TDZ (for letVar)
// func(); // IF we run fun() here then execution is outside the TDZ so it will work but execution in TDZ will not work...

function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared it will give syntax error
}


// function foo() {
//   var x = 1;
//   function bar() {
//     var y = 2;
//     console.log(x); // 1 (function `bar` closes over `x`)
//     console.log(y); // 2 (`y` is in scope)
//   }
// //   bar();
// //   console.log(x); // 1 (`x` is in scope)
// //   console.log(y); // ReferenceError, `y` is scoped to `bar`
// }

// console.log(x);
// foo();

var x = 5;

if(x==5){
  let x = 3;
  console.log(x);
}

