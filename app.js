
const fs = require("fs"); // loading fs library
const inquirer = require ('inquirer') // library to prompt user

const Employee = require("./lib/Employee"); //  class templates
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


var dataObj = {
    data: [],
}
promptUser()
// buildEmployeeTemplate();

function promptUser(){
    return inquirer.prompt([
        {
          type: "input",
          message: "Input the employee's name please.",
          name: "name",
        },
        {
            type: "input",
            message: "Also, input his employee ID.",
            name: "id",
        },
        {
          type: "list",
          message: "Great! Choose the appropriate title for them.",
          name: "title",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          type: "input",
          message: "What is the employee's email?",
          name: "email"
        }
    ]).then (promptRes => {
        var temp_EmployeeObj = new Employee (promptRes.name,promptRes.id, promptRes.email); // creating new object from constructor funciton 
        console.log (temp_EmployeeObj);

        var title = promptRes.title; // use 'title' & conditional to prompt user with correct Qs
        if (title === "Manager"){
            promptManagerQs(
                temp_EmployeeObj.name, // setting Obj properties
                temp_EmployeeObj.id, 
                temp_EmployeeObj.email
            )
        }
        else if (title === "Engineer"){
            promptEngineerQs(
                temp_EmployeeObj.name, 
                temp_EmployeeObj.id, 
                temp_EmployeeObj.email
            )
        }
        else if (title === "Intern"){
            promptInternQs(
                temp_EmployeeObj.name, 
                temp_EmployeeObj.id, 
                temp_EmployeeObj.email
            )
        }
        
    })
}

function buildEmployeeTemplate() {

}

function promptManagerQs(){
    return inquirer.prompt({
        type: "input",
        message: "question?",
        name: "ManagerQs"
      }).then(answer => {
       console.log(answer)
      })
}

function promptEngineerQs(){

}

function promptInternQs() {

}
function createHTML(){

}
