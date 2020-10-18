// // Assignment Code
var generateBtn = document.querySelector("#generate");

// declared variables for possible password characters
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "!@#$%^&*=+-_><|()[]\/?.,~`";
var pLength = "";
var passwordCharSet = "";


// function that writes password
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {

  // password length set by user
  var pLength  = prompt("How many characters would you like your password to contain?");


  // Boolean Variables asking for user input
  var numericInput = confirm("Click Ok to confirm including numeric characters");
  var lowerInput = confirm("Click Ok to confirm including lowercase characters");
  var upperInput = confirm("Click Ok to confirm including uppercase characters");
  var specialInput = confirm("Click Ok to confirm including special characters");

  // use conditionals to set password criteria
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
  // empty string to fill random password
  var randomPassword = "";
  // for loop generates random characters within selected criteria 
  for (var i = 0; i < pLength; i++) {
    randomPassword += passwordCharSet.charAt(Math.floor(Math.random() *passwordCharSet.length));
  }
  return randomPassword;
}
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);