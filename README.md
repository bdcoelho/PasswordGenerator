# JavaScript: Password Generator

### The Password Generator can be accessed here
https://bdcoelho.github.io/PasswordGenerator/


## Description

The password generator allows a user to generate a password of desired length from 8 to 128 characters that meets a set of criteria that the user may select. On loading the website, the user is presented with a series of prompts to include or exclude types of characters in the password. The default character set is lowercase letters

The criteria are as follows:

* Include uppercase characters
* Include numeric characters
* Include special characters
* Number of characters to include

Once the password is generated, it is displayed on the screen and the user may select and copy it.

## Method

The program uses arrays of ASCII codes to group each set of characters. Once the user selects the character type criteria, the program concatenates the relevant arrays into a combined array of allowable characters. A for loop then iterates for the number of characters required in the password, randomly selecting a character from the array of allowable characters. The user input is validated for (Y/N) for each of the character criteria and blank inputs are not accepted. The password length input is checked to ensure that the entry is numeric, non-blank and within the limits provided (8-128 characters).


## Screenshots



## Future work
Additional features were considered and some were partially implemented. These were archived as they required improvement and further testing. Some additional features that may be added in the future are:

* Interactive entry of criteria directly on the page rather than via prompts
* Auto copy to clipboard rather or via a copy button
* Default password criteria
* Improve page aesthetics
