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

