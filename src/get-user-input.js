import inquirer from "inquirer";
import { Manager } from "../lib/Manager.js";
import { Engineer } from "../lib/Engineer.js";
import { Intern } from "../lib/Intern.js";

export async function getTeamDetails() { 
    const team = [];                   
    let userFinished; 

    const manager = await getManagerDetails()
    team.push(manager)

    userFinished = await isUserFinished(); 

    while (!userFinished) {    
        const role = await getEmployeeRole()

        if(role==="Engineer") team.push(await getEngineerDetails())
        else if(role==="Intern") team.push(await getInternDetails())

        userFinished = await isUserFinished() 
    }
    return team
}

async function getEmployeeRole(){
    const {teamMemberRole} = await inquirer.prompt({ 
        message: `Please select the role of the Employee you want to add`,
        name: "teamMemberRole",
        type: "list",
        choices: ["Engineer", "Intern"]
    });
    return teamMemberRole
}

async function getGenericDetails(role){
    const genericDetails = await inquirer.prompt([
        { 
            message: `Please enter the ${role}'s name: `,
            name: "name",
            type: "input",
        },
        {
            message: `Please enter the ${role}'s Employee ID: `,
            name: "id",
            type: "input",
        },
        {
            message: `Please enter the ${role}'s Email address: `,
            name: "email",
            type: "input",
        },
    ]);
    return genericDetails
}

async function getManagerDetails(){
    const genericDetails = await getGenericDetails("manager")
    const managerDetails = await inquirer.prompt([
        {
            message: `Please enter the manager's Office number: `,
            name: "officeNumber",
            type: "input",
        },
    ]);

    const {name, id, email} = genericDetails
    const {officeNumber} = managerDetails

    const manager = new Manager(name, id, email, officeNumber)
    return manager
}

async function getEngineerDetails(){
    const genericDetails = await getGenericDetails("engineer")
    const engineerDetails = await inquirer.prompt([
        {
            message: `Please enter the Engineer's GitHub username: `,
            name: "github",
            type: "input",
        },
    ]);

    const {name, id, email} = genericDetails
    const {github} = engineerDetails

    const engineer = new Engineer(name, id, email, github)
    return engineer
}

async function getInternDetails(){
    const genericDetails = await getGenericDetails("intern")
    const internDetails = await inquirer.prompt([
        {
            message: `Please enter the intern's school: `,
            name: "school",
            type: "input",
        },
    ]);

    const {name, id, email} = genericDetails
    const {school} = internDetails

    const intern = new Intern(name, id, email, school)
    return intern
}

async function isUserFinished(){
    const { finished } = await inquirer.prompt({ 
        message: `Do you want to Finish building the team`,
        name: "finished",
        type: "confirm"
    });
    return finished
}