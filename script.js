// defining characters for generator
 
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var charNum = ""
for (let i = 8; i < 128; i++);   

 var generateConf = [alphaLower, alphaUpper, numbers, symbols] 

// Assignment Code
var generateBtn = document.querySelector("#generate");
document.getElementById("generate").addEventListener("click", generatePrompt);
function generatePrompt() {
  var res
  var charCount = prompt("How many characters would you like in your password?")
  if (charCount == null || charCount == "") {
    res="Please try again."
  }
  };



// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}; 


password = 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







