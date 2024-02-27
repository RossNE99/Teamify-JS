
import fs from "fs"; //imports
import constants from 'node:fs';

const checkIfFolderExists = async (dir) => {    //function to check if the output folder exists, if it doenst then create it
    fs.access(dir, constants.F_OK, (err) => {   // Check if the output directory exists
        if(err){    //if it donest exist then creaate
            fs.mkdir(dir, { recursive: true }, (err) => {   // If the directory doesn't exist, create it
                if (err) throw err; //if cant create the folder then throw error
            }); 
        }
    });    
}

export const writeToFile = async (path, outputDir, data) => {   //function to Save HTML file in output folder
    await checkIfFolderExists(outputDir)   //call function to check if build folder already exists
    fs.writeFile(path, data, (err) => { //save the file to the fs
        if (err) {  //if there was an error then console log the error
            console.error('Error writing to file:', err);
        } else {    //if everything went ok then console log Success
            console.log(`Successfully wrote ${path} file`);
        }
    })
}