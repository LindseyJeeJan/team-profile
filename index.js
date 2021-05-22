// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { S_IXGRP } = require('constants');
const teamData = [];

// Initialize a new Employee object
const manager = new Manager();

// Create an array of questions for user input
const questions = [

];

function createManager () {
   
}

function createOther (person) {
 
}

function addMember() {
        inquirer
        .prompt([
        {
            message: 'What is type of team member would you like to add?',
            name: 'memberType',
            type: 'list',
            choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
        }])
        .then((response) => {
            if (response.memberType === "Engineer"){
               teamData.push(response);
               addMember();
            } else if (response.memberType === "Intern"){
                 teamData.push(response)
                addMember();
            } else {
               console.log("\nCreating Team Chart.");
               writeToFile(teamData);
            }
        });
} 

// Write class objects to cards and output HTML
function writeToFile(data) {
    console.log(data);

  

    const fileTop = (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <script src="https://use.fontawesome.com/28ca8e225d.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>Team Profile</title>
    <style>
        i {
            min-width: 20px;
        }

        .card-header .fa,
        .card-header .fas {
            color: #ccc;
        }

        .card-body .fa,
        .card-body .fas,
        .list-group-item {
            color: #999;
        }

        .list-group-item span {
            color: #333;
            font-weight: bold;
        }

        .fa-github {
            font-size: 1.1rem;
        }
    </style>
</head><body><header class="h1 p-5 m-auto text-center bg-info text-white">My Team</header>
    <main class="p-3"><div class="container"><div class="row justify-content-center">`);
   
const fileBottom = (`</div> </div> </main></body></html>`);

function loopData(person) {
    return `
        <div class="col-4">
                    <div class="card mb-3 border-info">
                        <h5 class="card-header bg-dark text-light">
                            <div>${person.name}</div>
                            <small>${person.memberType}</small></h5>
                             <div class="card-body bg-info">
                            <ul class="list-group text-dark">
                                <li class="list-group-item"><i class="fas fa-id-badge"></i> ID: <span>${person.memberType}</span></li>
                                <li class="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i> Email: <a target="_blank" href="mailto:${person.email}">${person.email}</a></li>
                                <li class="list-group-item"><i class="fa fa-building" aria-hidden="true"></i> Office: <span>${person.officeNumber}</span></li>
                                <li class="list-group-item"><i class="fa fa-github" aria-hidden="true"></i> GitHub: <a target="_blank" href="www.github.com/${person.github}">${person.github}</a></li>
                                <li class="list-group-item"><i class="fas fa-university"></i> School: <span>${person.school}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
    `;
}

                            // <small><i class="fas fa-mug-hot"></i> Manager</small>
                            // <small><i class="fa fa-user" aria-hidden="true"></i> Engineer</small>
                            // <small><i class="fa fa-graduation-cap" aria-hidden="true"></i> Intern</small>
                        
                       

const otherstuff = (`${data.map(loopData).join("")}`); 
      
const printFile = (`${fileTop} ${otherstuff} ${fileBottom}`);  


    fs.writeFile('index.html', printFile, (err) =>
      err ? console.log(err) : console.log('Your portfolio was successfully created.')
    );

}

function init(){
    addMember();
}

init();
