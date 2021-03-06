
const fs = require("fs"); // loading fs library
const inquirer = require ('inquirer') // library to prompt user


const Employee = require("./lib/Employee"); //  class templates
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var profileTempData =[]

promptUser();
buildEmployeeTemplate();

function promptUser(){
    return inquirer.prompt([
        {
          type: "input",
          message: "Input the employee's name please.",
          name: "name",
        },
        {
            type: "input",
            message: "Innput their employee ID.",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
          },
        {
          type: "list",
          message: "Great! Choose the appropriate title for them.",
          name: "title",
          choices: ["Manager", "Engineer", "Intern"],
        },
    ]).then (promptRes => {
        var temp_EmployeeObj = new Employee (promptRes.name,promptRes.id, promptRes.email); // creating new object from constructor funciton 
        // console.log (temp_EmployeeObj);

        var title = promptRes.title; // use 'title' & conditional to prompt user with correct Qs
        if (title === "Manager"){
            promptManagerQs(
                temp_EmployeeObj.name, // setting Obj properties
                temp_EmployeeObj.id, 
                temp_EmployeeObj.email
            )
            // console.log(temp_EmployeeObj.name)

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

function promptManagerQs(name,id, email){
    return inquirer.prompt({
        type: "input",
        message: "What is your office number?",
        name: "addiPro_2NewObj",
      }).then(answer => {
    //    console.log(answer)
    var newManager = new Manager(name, id, email,answer.addiPro_2NewObj);
        // console.log(newManager)
    profileTempData.push(newManager)
    // console.log(profileTempData)
    buildEmployeeCard();
    })
}

function promptEngineerQs(name,id, email){
    return inquirer.prompt({
        type: "input",
        message: "What is your GitHub Username?",
        name: "addiPro_2NewObj",
      }).then(answer => {
    //    console.log(answer)
    var newEngineer = new Engineer(name, id, email,answer.addiPro_2NewObj)
        console.log(newEngineer)

    buildEmployeeTemplate();
      })
}

function promptInternQs(name,id, email) {
    return inquirer.prompt({
        type: "input",
        message: "What school are you enrolled in?",
        name: "addiPro_2NewObj",
      }).then(answer => {
    //    console.log(answer)
    var newIntern = new Intern (name, id, email,answer.addiPro_2NewObj)
        console.log(newIntern)

    buildEmployeeTemplate();
      })
}

function buildEmployeeCard() {

}

function createAppHTML(){

}

