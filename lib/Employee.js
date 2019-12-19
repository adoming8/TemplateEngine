class Employee {
    constructor(name, id, email){ // initialization with constructor function
        this.name = name;
        this.id = id;
        // this.title = title;
        this.email = email;
        this.role = 'Employee'
    }
    
    getName(name){
        return this.name;
    }
    getId(id){
        return this.id ;
    }
    getEmail(email){
        return this.email
    }   
    getRole(){
        return this.role;
    }

}

module.exports = Employee;
