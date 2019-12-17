class Employee {
    constructor(name, id, title, email){ // initialization with constructor function
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }
    
    getName(name){
        this.name = name;
    }
    getId(id){
        this.id = id;
    }
    getEmail(email){
        this.email = email;
    }   
    getRole(){
        return 'Employee';
    }

}

module.exports = Employee;

