const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        this.gitHub = gitHub;
    }

    getGitHub() {
         inquirer
      .prompt([
        {
          message: `What is the Engineer's GitHub username?`,
          name: 'engineerGitHub',
        }
      ])
      .then(response => {
        this.gitHub = response.engineerGitHub;
      });
    }

    getRole() {
        return 'Engineer';  
    }

}

module.exports = Engineer;