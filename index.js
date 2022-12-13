//node packages needed for file to run
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// prompts for the user to add read me info
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
                ["MIT", "APACHE", "GNU GPL", "BSD", "None"]
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
        .then((answers) => fs.writeFileSync(answers.title + ".md", generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to READEME.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();