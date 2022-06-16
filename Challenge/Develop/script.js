// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Length of Password
function determineLength(){
  passwordLength = prompt("How many characters would you like your password to be? (8-128 characters): ");

    if (passwordLength<8){
      alert("Password must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

 // all the input from the previous functions and generate password with a random number generator and Using charAt method 
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password2 = ""
  var password2 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password2;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
