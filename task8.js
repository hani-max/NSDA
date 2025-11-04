let tasks = [];

tasks.push("Complete homework");
tasks.push("Wash the dishes");
tasks.push("Read a book");

console.log("All Tasks:");
for (let i = 0; i < tasks.length; i++) {
  console.log(`${i + 1}. ${tasks[i]}`);
}

tasks.splice(1, 1); // Removes "Wash the dishes"

console.log("\nAfter removing one task:");
let i = 0;
while (i < tasks.length) {
  console.log(`${i + 1}. ${tasks[i]}`);
  i++;
}
