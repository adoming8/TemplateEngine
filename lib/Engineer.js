const Employee = require("./employee.js")

class Engineer extends Employee {       // an Engineer is and Enployee 
    constructor(name, id, email, GithubUserName){
        super(name, id, email);
        this.GithubUserName = GithubUserName;
    }
    getGithub(){
         this.GithubUserName = GithubUserName;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;