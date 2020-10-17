// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO write a function that generates the password
// TODO create a var to hold numbers, lowercase letters, uppercase letters and special characters
// TODO create a variable to hold the password length
// TODO prompt "How many characters would you like your password to contain?"
//  TODO Confirm "Click Ok to confirm including special characters"
//  TODO Confirm "Click Ok to confirm including numeric characters"
//  TODO Confirm "Click Ok to confirm including lowercase characters"
//  TODO Confirm "Click Ok to confirm including uppercase characters"



var passwordLength = "";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789"
var specialChar = "!@#$%^&*()[]\?/.,~`"



function passwordGenerator(len) {
  var length =
}