// Assignment Code
var upperCase =true;
var lowerCase =true;
var specialCharacter =true;
var numericalValue =true;
var lengthOfPassword = 0;
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "0123456789";
var symbolsString ="!@#$%^&*(_{}[]|?><.,";
var characterHolder= "";


//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //TODO: your code here

lengthOfPassword = prompt(
  "How long would you like your password?", "Between 8-128 characters");
   upperCase= confirm('Would you like UpperCase Letters included?');
   lowerCase= confirm('Would you like Lowercase Letters included?');
   specialCharacter= confirm('Would you like Special characters included?');
   numericalValue= confirm('Would you like Numbers included?');

if(lengthOfPassword. lengthOfPassword<8 ||lengthOfPassword>128){
  return "Enter a valid password length";
}else if (!upperCase&& !lowerCase&& !specialCharacter&& !numericalValue){
  return "Select at least one type of character for your password";
}else{
  if(upperCase){
    characterHolder += upperCaseString;
  }
  if(lowerCase){
    characterHolder += lowerCaseString;
  }
  if(numericalValue){
    characterHolder += numberString;
  }
}

}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
