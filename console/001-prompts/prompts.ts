alert("Please confirm the alert");

let shouldProceed = false;
do {
  shouldProceed = confirm("Do you want to proceed?");
} while (!shouldProceed);

// Prompting for user input.
const username = prompt("Please enter your name:");
console.log("Your name is: ", username);

// Prompting for user input with a default value.
const age = prompt("Please enter your age:", "18");
console.log("Your age is: ", age);
