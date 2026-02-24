// Create a variable named `hasAccess` and set it to `true`. Then write an if statement that checks if `hasAccess` is true. If it is, log the message 'Access granted' to the console.

// Create the hasAccess variable

// Write your if statement below
let hasAccess = true;
if (hasAccess) console.log("Access granted");

// Create a variable named `passwordCorrect` and set it to `false`. Write an if-else statement that logs 'Welcome to the vault' if the password is correct, or 'Access denied' if it's not.

let passwordCorrect = false;

if (passwordCorrect) {
  console.log("Welcome to the vault");
} else {
  console.log("Access denied");
}

// Create a variable named `clearanceLevel` and set it to `2`. Write an if-else-if-else chain that logs: - 'Maximum access granted' if level is 3 - 'Standard access granted' if level is 2 - 'Limited access granted' if level is 1 - 'No access' for any other value

const clearanceLevel = 2;

if (clearanceLevel === 2) {
  console.log("Standard access granted");
} else if (clearanceLevel === 3) {
  console.log("Limited access granted");
} else {
  console.log("No access");
}

// Create two variables: `score` with value `85` and `passingScore` with value `60`. Write an if statement that checks if score is greater than or equal to passingScore. If true, log 'You passed!' to the console.

let score = 85;
const passingScore = 60;

if (score >= passingScore) {
  console.log("You passed!");
}

// Create three variables: `hasKey` (true), `hasPermission` (true), and `isLocked` (false). Write an if statement that checks if the user has BOTH the key AND permission, and the door is NOT locked. If all conditions are met, log 'Door opened successfully'.

const hasKey = true,
  hasPermission = true,
  isLocked = false;

if (hasKey && hasPermission && !isLocked) {
  console.log("Door opened successfully");
}

// Create three variables: `hasMasterKey` (false), `isAdmin` (true), and `emergencyMode` (true). Write an if statement that grants access if the user has a master key OR (is an admin AND emergency mode is active). Log 'Emergency access granted' if conditions are met.

const hasMasterKey = false,
  isAdmin = true,
  emergencyMode = true;

if (hasMasterKey || (isAdmin && emergencyMode)) {
  console.log("Emergency access granted");
}

// Create a variable named `temperature` and set it to `25`. Use a ternary operator to create a variable named `status` that equals 'Hot' if temperature is greater than 30, otherwise 'Cool'. Log the status to the console.


const temperature = 25;

let status = temperature > 30 ? "Hot" : "Cool";

console.log(status);





// Create a variable named `command` and set it to `'status'`. Write a switch statement that logs: - 'System operational' for 'status' - 'Shutting down...' for 'shutdown' - 'Rebooting system...' for 'restart' - 'Unknown command' for default case Don't forget break statements!

// let command = "status";

switch (command) {
  case "status":
    console.log("System operational");
    break;
  case "restart":
    console.log("Rebooting system");
    break;
  default:
    console.log("Unknown command");
}
