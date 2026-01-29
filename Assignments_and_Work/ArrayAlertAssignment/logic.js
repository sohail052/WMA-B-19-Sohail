//Prompt input from user, adds to the array & print in alertbox

let arr1 = ["Ali", "Afzal", "Shehram", "Hamza"];
let name1 = prompt("Enter your name: ");
// regex used for avoiding non-alphabets / empty spaces
if (!name1 || /[^a-zA-Z]/.test(name1)) {
  alert("Please enter a valid name!");
} else {
  alert(arr1 + "," + name1);
}