// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github){
        if(!name) throw new Error("You must provide a name")
        if(!id) throw new Error("You must provide a id")
        if(!email) throw new Error("You must provide a email")
        if(!github) throw new Error("You must provide a github username")

        super(name, id, email, github)
        this.github = github
    }
    
    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}