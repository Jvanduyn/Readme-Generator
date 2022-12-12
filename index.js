// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: "What does the user need to do to install the dependencies?",
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how the user can use your application?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does someone need to know about contributing to your code in the future?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What program does the user need to install to run the test and what command do they need to run?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need for your project?',
            choices:
                ["MIT", "APACHE", "GPL", "BSD", "None"]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);
};

const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to READEME.md'))
        .catch((err) => console.error(err));
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data)
// }

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then()
// }

// Function call to initialize app
init();