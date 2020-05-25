// Assignment Code
var generateBtn = document.querySelector("#generate");

const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeUppercase");
const includeSpecialCharsElement = document.getElementById("includeUppercase");






// Change variable name
const textArea = document.getElementById("password");

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);
textArea.addEventListener("submit", e => {


e.preventDefault()
const characterAmount = characterAmountNumber.value;
const includeUppercase = includeUppercaseElement.checked;
const includeNumbers = includeNumbersElement.checked;
const includeSpecialChars = includeSpecialCharsElement.checked;



const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialChars);

})


function syncCharacterAmount(e){
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
