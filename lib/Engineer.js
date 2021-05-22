const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super(name, id, email);
      this.gitHub = gitHub;
    }

    getGitHub(response) {
      this.gitHub = response.engineerGitHub;
    }

    getRole() {
      return 'Engineer';  
    }

}

module.exports = Engineer;