const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes constructor methods can accept
    // arguments
    constructor(name, email, phone, role, id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.id = id;
    }

}
module.export = Employee