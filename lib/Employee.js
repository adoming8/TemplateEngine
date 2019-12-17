class Employee {
    constructor(name, id, email){ // initialization with constructor function
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName(){
        this.name = name;
    }
    getId(){
        this.id = id;
    }
    getEmail(){
        this.email = email;
    }   
    getRole(){
        return 'Employee';
    }

}

module.exports = Employee;

