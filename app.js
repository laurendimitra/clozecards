// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:

// module.exports = ClozeCard;

// The constructor should accept two arguments: text and cloze.

// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// The constructed object should have a partial property that contains only the partial text.

// The constructed object should have a fullText property that contains only the full text.

// The constructor should throw or log an error when the cloze deletion does not appear in the input text.

// Use prototypes to attach these methods, wherever possible.

// The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.

var inquirer = require("inquirer");
var basicCard = require("./basic.js");
var cloze = require("./clozecard.js"); 



inquirer.prompt([{
    type: "list",
    name: "basicorcloze",
    message: "What type of flashcard would you like to create?",
    choices: ["Basic", "Cloze", "No more!"]
}]).then(function (answer) {
    if (answer.basicorcloze === "Basic") {
        basicCard.isItWorking();
    } else if (answer.basicorcloze === "Cloze") { 
        cloze();
    } else {
        console.log("Great! Have fun studying!")
    }
});



function basic() {
    inquirer.prompt([{
            type: "message",
            name: "front",
            message: "Hey, what would you like the front to say?"
        },
        {
            name: "back",
            message: "Cool, what do you want the back to say?"
        }
    ]).then(function (answer) {
        console.log("Word. Here's your card:")
        console.log(answer.front)
        console.log(answer.back)
    });
}


function cloze() {
    console.log("CLOZE");

}