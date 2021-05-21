class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
 
  getName() {
     inquirer
      .prompt([
        {
          message: 'What is the employees name?',
          name: 'employeeName',
        }
      ])
      .then(response => {
        this.name = response.employeeName;
      });
  }

  getId() {
    inquirer
      .prompt([
        {
          message: 'What is the employees ID?',
          name: 'employeeID',
        }
      ])
      .then(response => {
        this.id = response.employeeID;
      });
  }

  getEmail() {
    inquirer
      .prompt([
        {
          message: 'What is the employees email?',
          name: 'employeeEmail',
        }
      ])
      .then(response => {
       this.email = response.employeeEmail;
      });
  }
    
  getRole() {
    return 'Employee';  
  }
}

module.exports = Employee;
