// Declaration of password criteria variables

function passwordGen() {
  var initialUppercase = {
    name: "uppercase letter characters",
    Value: false,
    UserInput: "",
  };
  var initialNumbers = {
    name: "number characters",
    Value: false,
    UserInput: "",
  };
  var initialSpecialChars = {
    name: "special characters",
    Value: false,
    UserInput: "",
  };

  var passwordCriteria = [
    initialUppercase,
    initialNumbers,
    initialSpecialChars,
  ];

  alert(
    "The default character type is lower case letters. Press OK to select other character types."
  );

  // A function to prompt user to enter password criteria and validate user inputs
  function charValidation(i) {
    var valCondition1 = ["Y", "N"];
    while (
      typeof passwordCriteria[i].UserInput != "string" ||
      !valCondition1.includes(passwordCriteria[i].UserInput.toUpperCase())
    ) {
      passwordCriteria[i].UserInput = prompt(
        "Would you like to include " +
          passwordCriteria[i].name +
          " in your password? Enter (Y/N) or (Esc/Cancel) to exit."
      );
      passwordCriteria[i].UserInput = passwordCriteria[
        i
      ].UserInput.toUpperCase();
      if (passwordCriteria[i] === null) break;
    }
    passwordCriteria[i].Value = passwordCriteria[i].UserInput === "Y";
  }
// For loop to pass each of the criteria (excluding number of characters) to the prompt and validation function.
  for (let i = 0; i < passwordCriteria.length; i++) {
    charValidation(i);
  }

  // While loop to prevent inputs that are non-integer, blank, over or below the limit.
  // While loop will break on Cancel by user.
  while (
    !Number.isInteger(initialNumChar) ||
    initialNumChar < 8 ||
    initialNumChar > 128
  ) {
    var initialNumChar = prompt(
      "Please enter a desired number of characters between 8 and 128 for the password. Press Esc or Cancel to exit."
    );
    if (initialNumChar === null) break;
    initialNumChar = parseInt(initialNumChar);
  }

  // A function to generate numerical ASCII codes from a numerical lower limit to upper limit
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
    initialNumChar,
    initialUppercase,
    initialNumbers,
    initialSpecialChars
  ) {
    let charCodes = lowerCharCodes;

    Edit HTML to dispay message to users after password generation. A message notifying the user of password criteria and length will be displayed
    document.querySelector("#id0").innerHTML = "You have selected";

    if (initialUppercase.Value) {
      charCodes = charCodes.concat(upperCharCodes);
      document.querySelector("#id1").innerHTML = initialUppercase.name;
    }
    if (initialSpecialChars.Value) {
      charCodes = charCodes.concat(specialCharCodes);
      document.querySelector("#id3").innerHTML = initialSpecialChars.name;
    }
    if (initialNumbers.Value) {
      charCodes = charCodes.concat(numberCharCodes);
      document.querySelector("#id2").innerHTML = initialNumbers.name;
    }

    var passwordCharacters = [];
    for (let i = 0; i < initialNumChar; i++) {
      var characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    document.querySelector("#id4").innerHTML =
      "Your password length is: " + initialNumChar + " characters";
    return passwordCharacters.join("");
  }

  // Function calls the generate password function and passes user inputs as arguments
  function writePassword() {
    event.preventDefault();
    var password = generatePassword(
      initialNumChar,
      initialUppercase,
      initialNumbers,
      initialSpecialChars
    );
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  writePassword();
}
// create a variable called generateBtn. Assign it the element of ID generate (ID of the button)
// Add event listener to generate button.
// When event "click" is detected on the button element, "generateBtn", run the write password function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passwordGen);
