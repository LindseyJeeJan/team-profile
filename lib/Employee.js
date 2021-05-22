class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
 
  getName(response) {
    this.name = response.employeeName;
  }

  getId(response) {
    this.id = response.employeeID;
  }

  getEmail(response) {
    this.email = response.employeeEmail;
  }
    
  getRole() {
    return 'Employee';  
  }
}

module.exports = Employee;
