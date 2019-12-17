const Employee = require("./Employee.js")

class Engineer extends Employee {       // an Engineer is and Enployee 
    constructor(name, id, email, title, GithubUserName){
        super(name, id, title, email);
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