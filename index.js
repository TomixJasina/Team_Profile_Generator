const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const employees = [];

// Definitions of questions for manager, engineer, intern and menu items

const managerQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
        default: 'John Smith'
    },
    {
        type: 'input',
        message: "What is your ID?",
        name: 'id',
        default: '1'
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
        default: '<EMAIL>'
    },
    {
        type: 'input',
        message: "What is your office number?",
        name: 'officeNumber',
        default: '100-200-300'
    }
];

const menuQuestions = [
    {
        type: 'list',
        message: "What to do next?",
        choices: ['Do you want to add an engineer?', 'Do you want to add an intern?', 'Do you want to finish building the team?'],
        name: 'menu'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
        default: 'Tom Smith'
    },
    {
        type: 'input',
        message: "What is your ID?",
        name: 'id',
        default: '2'
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
        default: '<EMAIL>'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
        default: 'TomSmith'
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
        default: 'Jane Smith'
    },
    {
        type: 'input',
        message: "What is your ID",
        name: 'id',
        default: '3'
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
        default: '<EMAIL>'
    },
    {
        type: 'input',
        message: "What is name of your school?",
        name: 'school',
        default: 'UofT'
    }
];

// Function to creater manager details
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

// Function to add new employee
async function showMenu() {
    try {
        const userResponse = await inquirer.prompt(menuQuestions);
        switch (userResponse.menu) {
            case 'Do you want to add an engineer?':
                await createEngineer();
                break;
            case 'Do you want to add an intern?':   
                await createIntern();
                break;
            default:
                writeToFile();
        }
    } catch(error) {
        console.log(error);
    }
}

// Function to creater engineer details
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

// Function to creater intern details
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

// Create a new `team.html` file
function writeToFile() {
    if(fs.existsSync(OUTPUT_DIR)) {
        fs.writeFileSync(outputPath, render(employees))
    } else {
        fs.mkdirSync(OUTPUT_DIR);
        fs.writeFileSync(outputPath, render(employees))
    }
}

async function main(){
    await createManager();
    writeToFile();
    console.log("`team.html` has been created successfully")
}

main();