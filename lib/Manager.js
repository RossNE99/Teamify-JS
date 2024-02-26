export class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        if(!name) throw new Error("You must provide a name")
        if(!id) throw new Error("You must provide a id")
        if(!email) throw new Error("You must provide a email")
        if(!officeNumber) throw new Error("You must provide a office number")

        super(name, id, email)
        this.officeNumber = officeNumber
    }
    
    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }
}