// Assignment Code
var upperCase = true;
var lowerCase = true;
var specialCharacter = true;
var numericalValue = true;
var lengthOfPassword = 0;
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "0123456789";
var symbolsString = "!@#$%^&*(_{}[]|?><.,";
var characterHolder = "";
var password = "";

alert('WELCOME TO THE PASSWORD GENERATOR \n Click Generate Password to Begin! ')

//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //TODO: your code here

  lengthOfPassword = parseInt(prompt(
    "How long would you like your password?",
    "Between 8-128 characters"
  ));

  while (lengthOfPassword < 8 || lengthOfPassword > 128 || isNaN(lengthOfPassword)) {
    alert("Try again and enter a valid numerical password length");
    lengthOfPassword = parseInt(prompt(
      "How long would you like your password?",
      "Between 8-128 characters"
    ));
  }
    
  // if (lengthOfPassword < 8 || lengthOfPassword > 128|| isNaN(lengthOfPassword)) {
  //   //input an invalid numerical length will result in the user to try again
  // }

  // redirect to begin again once button is clicked
  upperCase = confirm("Would you like UpperCase Letters included?");
  console.log(upperCase);
  lowerCase = confirm("Would you like Lowercase Letters included?");
  console.log(lowerCase);
  specialCharacter = confirm("Would you like Special characters included?");
  console.log(specialCharacter);
  numericalValue = confirm("Would you like Numbers included?");
  console.log(numericalValue);

  //the characterHolder is getting its string here based on the users decision

  if (!upperCase && !lowerCase && !specialCharacter && !numericalValue) {
    return alert("Select at least one type of character for your password");
  } else {
    if (upperCase) {
      characterHolder += upperCaseString;
    }
    if (lowerCase) {
      characterHolder += lowerCaseString;
    }
    if (numericalValue) {
      characterHolder += numberString;
    }
    if (specialCharacter){
      characterHolder += symbolsString;
    }

    for (let x = 0; x < lengthOfPassword; x++) {
      password += characterHolder.charAt(
        Math.floor(Math.random() * characterHolder.length)
      );
      console.log(lengthOfPassword)
    console.log(password)
    
    }
    return password;
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
