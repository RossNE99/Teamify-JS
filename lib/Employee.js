export class Employee {
    constructor(name, id, email){
        // if(!name) throw new Error("You must provide a name")
        // if(!id) throw new Error("You must provide a id")
        // if(!email) throw new Error("You must provide a email")

        this.name = name
        this.id = id
        this.email = email
    }

    getName(){
        return this.name
    }
    
    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
}