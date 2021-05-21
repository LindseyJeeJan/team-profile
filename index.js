// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const teamData = [];
// Initialize a new Employee object
const manager = new Manager();
manager.getRole();
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
teamData.push(manager);

// Create an array of questions for user input
const questions = [
    {
      message: 'What is type of team member would you like to add?',
      name: 'memberType',
      type: 'list',
      choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
    },
    {   
        when: function (response) {
            return response.memberType === 'Engineer';
        },
        message: 'What is the Engineers GitHub username?',
        name: 'engineerGitHub',
    },
    {   when: function (response) {
            return response.memberType === 'Intern';
        },
        message: 'What is the name of the Interns school?',
        name: 'internSchool',
    }
];

// Write class objects to cards and output HTML
function writeToFile(fileName, data) {
    const printFile = (`

    `);
    fs.writeFile(fileName, printFile);
}

inquirer
    .prompt(questions)
    .then((response) => {
        // writeToFile('./dist/index.html', response);
        console.log(response);
        console.log(teamData);
     });