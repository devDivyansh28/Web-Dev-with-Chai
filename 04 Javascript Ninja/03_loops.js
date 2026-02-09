// Create a variable named `counter` and set it to `1`. Write a while loop that logs the counter value and increments it by 1, continuing until counter reaches 6. The loop should log numbers 1 through 5

let counter = 1;

while (counter < 6) {
  console.log(counter);
  counter++;
}

// Create a variable named `countdown` set to `5`. Write a while loop that logs the countdown value, decrements it by 1, and continues until it reaches 0. After the loop, log 'Blast off!'.

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast off!");

// Write a for loop that starts at 0, continues while i is less than 5, and increments i by 1 each iteration. Log each value of i to the console.

// Write your for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Create an array named `colors` with the values: 'red', 'green', 'blue'. Write a for loop that iterates through the array and logs each color to the console.

let colors = ["red", "green", "blue"];

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Write a for loop that iterates from 1 to 10. Log each number, but use a `break` statement to exit the loop immediately when the number reaches 5. Only numbers 1 through 5 should be logged

// Write your for loop with a break statement
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(i);
    break;
  }
  console.log(i);
}

// Write a for loop that iterates from 1 to 5. Use a `continue` statement to skip logging when the number is 3. Log all other numbers.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// Create an array named `fruits` with values: 'apple', 'banana', 'orange'. Write a for...of loop to iterate through the array and log each fruit.

let fruits = ["apple", "banana", "orange"];

for (const element of fruits) {
  console.log(element);
}

// Write nested for loops to create a 3x3 grid. The outer loop should iterate from 1 to 3 (representing rows), and the inner loop should also iterate from 1 to 3 (representing columns). For each combination, log the string in format 'Row X Col Y' (e.g., 'Row 1 Col 1').

// Write your nested loops
for(let i = 1 ;i<=3;i++){
  for(let j= 1 ; j<=3;j++){
    console.log(`Row ${i} Col ${j}`);
  }

  
}