//Imports
import inquirer from "inquirer";
import { Manager } from "../lib/Manager.js";
import { Engineer } from "../lib/Engineer.js";
import { Intern } from "../lib/Intern.js";

export const getTeamDetails = async () => { //Function to gather the teams details 
    const team = [];    //Initialize the team array                
    let userFinished;   //Initialize userFinished variable

    const manager = await getManagerDetails() //get the managers details. this is outside of while loop as client specifed there will only be one manager
    team.push(manager)  //add the manager to the team array

    userFinished = await isUserFinished(); //ask the user if they are done adding team members

    while (!userFinished) {  //if the above was answered no then loop until the user is done adding members
        const role = await getEmployeeRole()  //request the user to select role of the employee that the user wants to add

        if(role==="Engineer") team.push(await getEngineerDetails()) //if above is answered Engineer then ask Engineer related questions and add the users input to the team array
        else if(role==="Intern") team.push(await getInternDetails()) //if above is answered Intern then ask Intern related questions and add the users input to the team array

        userFinished = await isUserFinished() //ask the user if they are done building the team or if they want to add another member 
    }
    return team //return all employees
}

const getEmployeeRole = async () => {   //function to ask the user what the role of the employee they want to add is
    const {teamMemberRole} = await inquirer.prompt({ 
        message: `Please select the role of the Employee you want to add`,
        name: "teamMemberRole",
        type: "list",
        choices: ["Engineer", "Intern"]
    });
    return teamMemberRole //return the role
}

const getGenericDetails = async (role) => { //function to get the basic details required for all roles
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
    return genericDetails //return the details
}

const getManagerDetails = async () => { //function to get details specific to managers and create the manager object
    const genericDetails = await getGenericDetails("manager") //ask the gerneric questions
    const managerDetails = await inquirer.prompt([
        {
            message: `Please enter the manager's Office number: `,
            name: "officeNumber",
            type: "input",
        },
    ]);

    const {name, id, email} = genericDetails //destructure the gerneric user answers
    const {officeNumber} = managerDetails   //destructure the manager, user answers

    return new Manager(name, id, email, officeNumber) //return the new manager object
}

const getEngineerDetails = async () => { //function to get details specific to engineer and create the engineer object
    const genericDetails = await getGenericDetails("engineer") //ask the gerneric questions
    const engineerDetails = await inquirer.prompt([
        {
            message: `Please enter the Engineer's GitHub username: `,
            name: "github",
            type: "input",
        },
    ]);

    const {name, id, email} = genericDetails //destructure the gerneric user answers
    const {github} = engineerDetails //destructure the engineers, user answers

    return new Engineer(name, id, email, github) //return the new engineer object
}

const getInternDetails = async () => { //function to get details specific to intern and create the intern object
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

    return new Intern(name, id, email, school) //return new intern object
}

const isUserFinished = async () => {    //function to ask if the user is finnished building the team or not
    const { finished } = await inquirer.prompt({ 
        message: `Do you want to Finish building the team`,
        name: "finished",
        type: "confirm"
    });
    return finished //returns a boolean
}