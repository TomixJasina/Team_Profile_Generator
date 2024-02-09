// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        // Employee constructor are name, id, email
        super(name, id, email);

        // Constructor to Manger
        this.officeNumber = officeNumber;
        // Overide role from parent Employee class
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;