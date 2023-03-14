// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays
var emptVar = [];
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numChar = ["0","1","2","3","4","5","6","7","8","9"];
var spChar = ["!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","[","_",",","/","{","|","}","~"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompt = getPrompts();
  var passwordText = document.querySelector("#password");

  if(truePrompt) {
    var endPassword = generatePassword();
    passwordText.value = endPassword;
  }
  
}

// click generate password button
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
      var rand = Math.floor(Math.random() * emptVar.length);
      password = password + emptVar[rand];
    }
    return password;
}


// prompt function for less clutter
function getPrompts() {
  emptVar = [];

  // prompt user for length of password (at least 8-128)
  passwordLength = parseInt(prompt("How long would you like your password to be? (at least 8-128 characters"));

  // alert user if password did not meet length criteria
  if (passwordLength < 8 || passwordLength > 128) {
    alert("PASSWORD MUST BE MORE THAN 7 OR LESS THAN 129 CHARACTERS!!");
    return "user error";
  }
  
  // confirm from user if want to use lowercase letters
  var lowerPrompt = confirm("Would you like lowercase?");
  // if user wants lowercase: concat choice array with lowercase
  if (lowerPrompt) {
    emptVar = emptVar.concat(lowerChar);
  }

  // confirm for uppercase letters
  var upperPrompt = confirm("Would you like upper case letters?");
  // concat with uppercase
  if (upperPrompt) {
    emptVar = emptVar.concat(upperChar);
  }

  // confirm for numbers
  var numPromt = confirm("What about numbers?");
  // concat with numbers
  if (numPromt) {
    emptVar = emptVar.concat(numChar);
  }

  // confirm for special characters
  var spPrompt = confirm("Any special characters");
  // concat with special characters
  if (spPrompt) {
    emptVar = emptVar.concat(spChar);
  }

  // validating that user used at least one option from above
  if (lowerPrompt === false && upperPrompt === false && numPromt === false && spPrompt === false) {
    alert("PASSWORD MUST CONTAIN AT LEAST ONE OPTION ASKED: Try Again!");
    return "user error";
  }

  return true;

}