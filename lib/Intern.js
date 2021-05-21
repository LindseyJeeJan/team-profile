const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
    }
    
    getSchool() {
        inquirer
      .prompt([
        {
          message: `What is the name of the Intern's school?`,
          name: 'internSchool',
        }
      ])
      .then(response => {
        this.school = response.internSchool;
      });
    }

    getRole() {
        return 'Intern';  
    }

}

module.exports = Intern;