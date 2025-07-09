// build a program that validates a user's password with the following requirements
// The password must be at least 8 characters long.
// The password must contain at least one uppercase letter.
// The password must contain at least one number.
// If the password does not meet all the requirements, the program should
// keep asking the user for a new password until they provide a valid one.

const input = require('readline-sync');


let password;
let isValid;

do {
    password = input.question("Enter your password:");
    isValid = true; //assume it is true for do...while loop

    let hasUpperCase = false; //will check for upper case letter
    let hasNumber = false; // will check for number

    if(password.length < 8){
        isValid = false; //Changes password validity
        console.log("Your password must be at least 8 characters long.");
    }
    for(let i = 0; i < password.length; i++){
        const character = password.charCodeAt(i); //variable to access each index of password and get the ascii code for it
        if(character >= 65 && character <= 90) { //uses ascii codes to check if any character in password is betweeen A-Z
            hasUpperCase = true;
        }
        if(character >= 48 && character <= 57) { //uses ascii codes to check if any character in password is between 0-9
            hasNumber = true;
        }
    }
    if(!hasUpperCase){
        isValid = false;
        console.log("Your password must contain at least 1 uppercase letter");
    }
    if(!hasNumber){
        isValid = false;
        console.log("Your password must contain at least 1 number");
    }
    if(!isValid){
        console.log("Please try a different password.");
    }

}while(!isValid);

console.log("Your password has been accepted.")