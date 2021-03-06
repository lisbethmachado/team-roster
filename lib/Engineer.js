// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const fs = require("fs");

const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    if (this.name && this.id && this.email && this.github) {
    return "Engineer";
  }
}
  getGithub() {
    if (this.github) {
      return this.github;
     }
}
}

module.exports = Engineer