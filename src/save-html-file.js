import { promises as fsPromises, constants } from "fs"; //imports

const checkIfFolderExists = async (dir) => {    //function to check if the output folder exists, if it doenst then create it
    try {
        await fsPromises.access(dir, constants.F_OK); // Check if the output directory exists
    } catch (err) {
        if (err.code === 'ENOENT') { // If the directory doesn't exist, create it
            await fsPromises.mkdir(dir, { recursive: true });
        } else {
            throw err; // If there's an error other than the directory not existing, rethrow it
        }
    }  
}

export const writeToFile = async (path, outputDir, data) => {   //function to Save HTML file in output folder
    await checkIfFolderExists(outputDir); // Call function to check if output folder exists

    try {
        await fsPromises.writeFile(path, data); // Save the file to the filesystem
        console.log(`Successfully wrote ${path} file`);
    } catch (err) {  //if there is an error saving the file console log it
        console.error('Error writing to file:', err);
    }
}