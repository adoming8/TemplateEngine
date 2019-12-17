const Employee = require("./Employee.js")

class Manager extends Employee {       // an Engineer is and Enployee 
    constructor(name, id, email, GithubUserName){
        super(name, id, title, email);
        this.GithubUserName = GithubUserName;
    }
    getGithub(){
         this.GithubUserName = GithubUserName;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;