import {getTeamDetails} from "./src/get-user-input.js"
import {render} from "./src/page-template.js";
import {writeToFile} from "./src/save-html-file.js"
import path from "path";
const __dirname = import.meta.dirname;

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = await getTeamDetails()
const htmlData = render(team)

writeToFile(outputPath, OUTPUT_DIR, htmlData)
