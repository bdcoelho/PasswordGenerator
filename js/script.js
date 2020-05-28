// Prompt user to enter the desired number of characters in the password.
// This can be edited by using the scroll bar or number field below.
// The default character set is 
// Users can also select which character groups 


// While loop to prevent inputs that are non-integer, blank, over or below the limit.
// While loop will break on Cancel by user.

while((!Number.isInteger(initialNumChar))||(initialNumChar<4)||(initialNumChar>32)){

var initialNumChar = prompt("Please enter a desired number of characters between 4 and 32 for the password. You can edit this and select allowable characters below.")
if(initialNumChar===null) break;
initialNumChar=parseInt(initialNumChar)

}


// Get the elements containing the following from the DOM using their ID:
// Number of characters by range (slider position) and number, whether to include upper case,
// numbers and special characters




var numCharRangeElement = document.getElementById("numCharRange");
var numCharNumberElement = document.getElementById("numCharNumber");
var includeUppercaseElement = document.getElementById("includeUppercase");
var includeNumbersElement = document.getElementById("includeNumbers");
var includeSpecialCharsElement = document.getElementById("includeSpecialChars");
numCharNumberElement.value = initialNumChar
numCharRangeElement.value = initialNumChar

// A function to synchronize the input from the slider to the numerical input.
function syncCharacterAmount(event) {
  var value = event.target.value;
  numCharNumberElement.value = value;
  numCharRangeElement.value = value;
}




// Event listeners for number input and slider input
// syntax: element.addEventListener(event, function)
numCharNumberElement.addEventListener("input", syncCharacterAmount);
numCharRangeElement.addEventListener("input", syncCharacterAmount);



// A function to generate numerical ASCII codes from a lower limit to an upper limit
// corresponding to different groups of characters.
function asciiCodeGen(limitLow, limitHigh) {
  var array = [];
  for (let i = limitLow; i <= limitHigh; i++) {
    array.push(i);
  }
  return array;
}

// Generate ASCII codes for different groups of characters
// Source: https://catonmat.net/ascii-cheat-sheet

var upperCharCodes = asciiCodeGen(65, 90);
var lowerCharCodes = asciiCodeGen(97, 122);
var numberCharCodes = asciiCodeGen(48, 57);
var specialCharCodes = asciiCodeGen(33, 47)
  .concat(asciiCodeGen(58, 64))
  .concat(asciiCodeGen(91, 96))
  .concat(asciiCodeGen(123, 126));




// create a variable called generateBtn. Assign it the element of ID generate (ID of the button)
var generateBtn = document.querySelector("#generate");


// A function to generate the password.
// Takes in arguments for no. of characters and allowed character types.
// Lower case characters are the default option.
// 3 if statements either include or exclude character groups based on user selection.
// As a new character group is selected, the ASCII character code array is appended to the 
// current character codes array.
// passwordCharacters is an array of all allowed characters based on user selection.
// A for loop runs for a number of iterations equalling the password length and selects
// a random character from the array of allowed characters.


function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSpecialChars
) {
  let charCodes = lowerCharCodes;
  if (includeUppercase) {
    charCodes = charCodes.concat(upperCharCodes);
  }
  if (includeSpecialChars) {
    charCodes = charCodes.concat(specialCharCodes);
  }
  if (includeNumbers) {
    charCodes = charCodes.concat(numberCharCodes);
  }

  var passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    var characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

// A function to write the password to an element of ID "password"
// Parameters for password are as follows:

// characterAmount - number of characters
// includeUppercase - boolean to include/exclude upper case characters
// includeNumbers - boolean to include/exclude number characters
// includeSpecialChars - boolean to include/exclude special characters

// Function calls the generate password function
function writePassword() {
  event.preventDefault();
  var characterAmount = numCharNumberElement.value;
  var includeUppercase = includeUppercaseElement.checked;
  var includeNumbers = includeNumbersElement.checked;
  var includeSpecialChars = includeSpecialCharsElement.checked;
  var password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSpecialChars
  );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button.
// When event "click" is detected on the button element, "generateBtn", run the write password function

generateBtn.addEventListener("click", writePassword);
