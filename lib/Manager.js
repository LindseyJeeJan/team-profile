const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
      inquirer
      .prompt([
        {
          message: 'What is the managers office number?',
          name: 'officeNumber',
        }
      ])
      .then(response => {
        this.officeNumber = response.officeNumber;
      });
    }

    getRole() {
        return 'Manager';  
    }

}

module.exports = Manager;