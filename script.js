// defining characters for generator

// Assignment Code
var generateBtn = document.querySelector("#generate");
//document.getElementById("generate").addEventListener("click", generatePassword);
function generatePassword() {
  
  //characters
  var alphaLower = "abcdefghijklmnopqrstuvwxyz";
  var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";
  var generateConf = ""; 
  var generatedPass = "";

  var charCount = prompt("How many characters would you like in your password?");
  if (charCount === null || charCount === "") {
    alert("Please choose character amount between 8 and 128.");
  }

  if (charCount < 8 || charCount > 128) {
    alert("Please choose character amount between 8 and 128.");
  }

   if (charCount >= 8 && charCount <= 128) {
    var confOne = confirm("Click OK to confirm including special characters.");
    var confTwo = confirm("Click OK to include lowercase letters."); 
    var confThree = confirm("Click OK to include uppercase letters."); 
    var confFour = confirm("Click OK to include numbers.");  
     };

    if (confOne == true) {
      generateConf += symbols
    }

    if (confTwo == true) {
      generateConf +=alphaLower
    }

    if (confThree == true) {
      generateConf += alphaUpper
    }

    if (confFour == true) {
      generateConf += numbers
    }
    
    //alert(generateConf);

    for (let i = 0; i < charCount; i++) {
      generatedPass += generateConf.charAt(Math.floor(Math.random()*generateConf.length))
        
      }
      return generatedPass   
    };



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







