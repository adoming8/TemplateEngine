
const fs = require("fs"); // loading fs library
const inquirer = require("inquirer"); // library to promp user

const Engineer = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern,js")

const generateHtml = require("./templates/main.js");

promptUser(){
    return inquirer.prompt([
        {
        message: 'What is your name',
        name:'name'
        },
        {
        message:'What is your company ID?',
        name:'id'  
        },
        {
        message:'What is your title (Manager, Engineer or Intern)?',
        name:'title'  
        }
    ]).then(answers => {
        // console.log(this); //operator this refer to newHomework Object
        this.githubUserName = answers.githubUserName
        this.color = answers.color
        // console.log(this);
        this.makeApiRequest();

    })
}




