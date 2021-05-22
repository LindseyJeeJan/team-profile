const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    getOfficeNumber(response) {
      this.officeNumber = response.officeNumber;
    }

    getRole() {
        return 'Manager';  
    }
}

module.exports = Manager;