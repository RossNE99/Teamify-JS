//imports
import {getTeamDetails} from "./src/get-user-input.js"
import {render} from "./src/page-template.js";
import {writeToFile} from "./src/save-html-file.js"
import path from "path";
const __dirname = import.meta.dirname;

const init = async () => {  // function to initialize program
    const OUTPUT_DIR = path.resolve(__dirname, "output");   //set the output directory
    const outputPath = path.join(OUTPUT_DIR, "team.html");  //set the output filepath

    const team = await getTeamDetails() //ask the user for input and wait for the user to finnish putting in the team details
    const htmlData = render(team)   //Convert users input into a html string

    writeToFile(outputPath, OUTPUT_DIR, htmlData)   //save the html code into a .html file so it can be viewed in a web browser
}
init()  // function call to initialize program
