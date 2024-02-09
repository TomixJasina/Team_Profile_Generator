const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

const managerQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your office number?",
        name: 'officeNumber',
    }
];