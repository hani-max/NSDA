// Arithmetic operators

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// Logical operators
let isComplete = false;
let isImportant = true;

console.log("AND:", isComplete && isImportant);
console.log("OR:", isComplete || isImportant);
console.log("NOT:", !isComplete);

// if/else
let tasksDone = 3;
let totalTasks = 5;
let remaining = totalTasks - tasksDone;

if (tasksDone === totalTasks) {
  console.log("All tasks are done!");
} else if (tasksDone >= totalTasks - 1) {
  console.log("Almost finished. Only " + remaining + " left.");
} else {
  console.log("Keep going. " + remaining + " tasks left.");
}

//Ternary Operator

let Completeproject = 3;
let totalproject = 5;

let quickStatus = tasksDone === totalTasks ? "Finished" : "In Progress";
console.log("Quick Status:", quickStatus);
