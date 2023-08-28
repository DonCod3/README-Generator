// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title of your project.");
                    return false;
                }
            }  
        }, 
        {
            type: "input",
            name: "projectDescription",
            message: "Provide a description of the project:",
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Provide a description of how to get the development environment running.",
            validate: installInput => {
                if(installInput) {
                    return true;
                } else {
                console.log("Please provide instructions for installation.")
                return false;
                }
            }
        },
        {
            type:"input",
            name: "usage",
            message: "Provide instrictions and examples for use:",
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log("Please provide instructions and examples for use.")
                    return false;
                }
            }
        },
        { 
            type: "confirm",
            name: "imageConfirm",
            message: "Would you like to include an image of the project?",
            default: true
        },
        {
            type: "input",
            name: "imageLocation",
            message: "Provide the relative filepath for your image:",
            when: ({imageConfirm}) => {
                if(imageConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "licenseConfirm",
            message: "Would you like to include a license for this project?",
            default: true
        },
        {
            type: "checkbox",
            message: "Please select the license that you would like to apply:",
            name: "license",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
            when: ({licenseConfirm}) => {
                if(licenseConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input", 
            name: "contributions",
            message: "Please add contributing guidelines for this project:"
        },
        {
            type: "input",
            name: "tests", 
            message: "Please provide tests for your application as well as how to properly run them",
            validate: testInput => {
                if(testInput) {
                    return true;
                } else {
                    console.log("Please provide tests for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please provide your Github username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please provide your email.");
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./README2.md", data, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created"
            });
        });
    });
};

// function to initialize app
// async function improves readability and resembles synchronous code vs .then() methods

async function init() {
    try {
        const readmeData = await questions();
        const pageHTML = generateMarkdown(readmeData);
        await writeToFile(pageHTML);
        console.log("README file created successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Function call to initialize app
init();
