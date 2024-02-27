import {getTeamDetails} from "./src/get-user-input.js"
import path from "path";
import fs from "fs";

//const OUTPUT_DIR = path.resolve(__dirname, "output");
//const outputPath = path.join(OUTPUT_DIR, "team.html");

//import {render} from "./src/page-template.js";


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = await getTeamDetails()

//testing
console.log(team)
console.log(team[0].getRole())
