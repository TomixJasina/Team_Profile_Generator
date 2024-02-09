// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Employee constructor are name, id, email
        super(name, id, email);

        // Constructor to Intern
        this.school = school;
        // Overide role from parent Employee class
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;