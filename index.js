// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../../utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Add a title for the app:",
        type: "input",
    },
    {
        name: "description",
        message: "Add a short description on the purpose of this app:",
        type:"input",
    },
    {
        name: "license",
        message: "What license was used?",
        type: "list",
        choices: ["MIT", "IBM", "Apache", "None"],
    },
    {
        name: "usage",
        message: "Add some instructions for how to use this app as a beginner:",
        type: "input",
    },
    {
        name: "table-of-contents",
        message: "Add a couple of items for a table of contents",
        type: "input",
    },
    {
        name: "installation",
        message: "Add some instructions on how to install this app:",
        type: "input",
    },
    {
        name: "reporting",
        message: "Add some instructions on how to report issues with this app:",
        type: "input",
    },
    {
        name: "contributing",
        message: "Add some instructions how others can contribute to the project:",
        type: "input",
    },
    {
        name: "contributers",
        message: "Who helped work on the project?",
        type: "input",
    },
    {
        name: "tests",
        message: "Add some instructions for testing:",
        type: "input",
    },
    {
        name: "email",
        message: "Add a contact email for any questions that will arise:",
        type: "input",
    },
    {
        name: "github",
        message: "What is your GitHub username?",
        type: "input",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName ,(data), (err) => {
        err ? console.log(err) : console.log("ReadMe written!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        const readmeData = generateMarkdown(data);
        writeToFile("professionalreadme.md", readmeData);
    });
}

// Function call to initialize app
init();
