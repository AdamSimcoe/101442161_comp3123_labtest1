// Created by Adam Simcoe
// Last Updated October 3rd 2024

/* Create a script that will perform two things: 
   1. Remove all files from the logs directory if it currently exists, outputs all file names to delete, 
      and finally removes the logs directory. 
   2. Creates a log directory if it does not exist, changes the current process to the new logs directory, 
      creates 10 log files and writes some text into the file, and finally outputs the file names to console. */

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), 'Logs');

const removeLogFiles = () => {

    if (fs.existsSync(logsDirectory)) {
        const files = fs.readdirSync(logsDirectory);
        
        if (files.length > 0) {
            files.forEach(logFile => {
                console.log(`Delete files...${logFile}`);
            });

            files.forEach(logFile => {
                const filePath = path.join(logsDirectory, logFile);
                fs.unlinkSync(filePath);
            });
        }

        process.chdir('..')
        fs.rmdirSync(logsDirectory);
        console.log('The logs directory has been successfully removed.');

    } else {
        console.log('The logs directory does not currently exist.');
    }
};

const createLogFiles = () => {

    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
        console.log('Logs directory has been successfully created.');
    }

    process.chdir(logsDirectory);

    for (let i = 0; i < 10; i++) {
        const logFileName = `log${i}.txt`;
        const logFileContent = `This is log file ${i}, created for lab test 1's question 3.`;

        fs.writeFileSync(logFileName, logFileContent);
        console.log(`${logFileName}`);
    }
};

createLogFiles();
removeLogFiles();
