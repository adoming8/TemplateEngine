const Employee = require("./Employee.js")

class Intern extends Employee {       // an Engineer is and Enployee 
    constructor(name, id, email, school){
        super(name, id, title, email);
        this.school = school;
    }
    getschool(){
         this.school = school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;