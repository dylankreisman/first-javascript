// defining characters for generator
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


// Assignment Code
var generateBtn = document.querySelector("#generate");
document.getElementById("generate").addEventListener("click", generatePrompt);
function generatePrompt() {
  var generatePrompt = prompt("What would you like included in your password?")
  alert (generatePrompt);
  };
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







