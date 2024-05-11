#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number
// user input for guessing number
// Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessednumber",
        type: "number",
        message: "please guess a number between 1 - 6",
    }
]);
//console.log(answer);
if (answer.userGuessednumber === randomNumber) {
    console.log("hurrah! you guess is right");
}
else {
    console.log("oh sad! your guess is wrong");
}
