class Intern extends Employee {
    constructor(name, id, email, school){
        if(!name) throw new Error("You must provide a name")
        if(!id) throw new Error("You must provide a id")
        if(!email) throw new Error("You must provide a email")
        if(!school) throw new Error("You must provide a school")

        super(name, id, email)
        this.school = school
    }
    
    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }
}