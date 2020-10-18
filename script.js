// // Assignment Code
var generateBtn = document.querySelector("#generate");

// declared variables for possible password characters
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "!@#$%^&*=+-_><|()[]\/?.,~`";
var pLength = "";
var passwordCharSet = "";




function writePassword() {

  // password length set by user
  var lengthInput = prompt("How many characters would you like your password to contain?");

  // Boolean Variables asking for user input
  var numericInput = confirm("Click Ok to confirm including numeric characters");
  var lowerInput = confirm("Click Ok to confirm including lowercase characters");
  var upperInput = confirm("Click Ok to confirm including uppercase characters");
  var specialInput = confirm("Click Ok to confirm including special characters");

  if (numericInput) {
    passwordCharSet += numericChar;
  }
  if (lowerInput) {
    passwordCharSet += lowerChar;
  }
  if (upperInput) {
    passwordCharSet += upperChar;
  }
  if (specialInput) {
    passwordCharSet += specialChar;
    console.log(passwordCharSet)
  }

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);