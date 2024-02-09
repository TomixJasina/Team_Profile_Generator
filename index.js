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

const menuQuestions = [
    {
        type: 'list',
        message: "What to do next?",
        choices: ['Do you want to add an engineer?', ' Do you want to add an intern?', 'Do you want to finish building the team?'],
        name: 'menu'
    }
];

const engineerQuestions = [
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
        message: "What is your GitHub username?",
        name: 'github',
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your ID",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is name of your school?",
        name: 'school',
    }
];
async function createManager() {
    try {
        console.log("Adding manager:");
        const userResponses = await inquirer.prompt(managerQuestions);

        const manager = new Manager(userResponses.name, userResponses.id, userResponses.email, userResponses.officeNumber);

        employees.push(manager);

    }   catch(error) {
        console.log(error);
    }

   await showMenu();
}   
async function showMenu() {
    try {
        const userResponse = await inquirer.prompt(menuQuestions);
        switch (userResponse.menu) {
            case "Add an engineer?":
                await createEngineer();
                break;
            case 'Add an intern?':   
                await createIntern();
                break;
            default:
                writeToFile();
        }
    } catch(error) {
        console.log(error);
    }
}
async function createEngineer(){
    try {
        console.log("Adding enginner:");
        const userResponses = await inquirer.prompt(engineerQuestions);

        const engineer = new Engineer(userResponses.name, userResponses.id, userResponses.email, userResponses.github);

        employees.push(engineer);

    }   catch(error) {
        console.log(error);
    }

    await showMenu();
}

async function createIntern(){
    try {
        console.log("Adding intern:");
        const userResponses = await inquirer.prompt(internQuestions);

        const intern = new Intern(userResponses.name, userResponses.id, userResponses.email, userResponses.school);

        employees.push(intern);

    }   catch(error) {
        console.log(error);
    }

   await showMenu();
}