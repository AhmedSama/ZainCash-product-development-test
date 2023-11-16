function groupEmployeeToItsFiles(fileList) {
    // Output list of each employee with their list of files
    const employeeFilesOutput = [];

    // Map the employee name to its index inside the employeeFiles list
    const employeeIndexMap = {};

    // Iterate through the input list and organize files
    for (const fileInfo of fileList) {
        const [file, employee] = Object.entries(fileInfo)[0];

        // If the employee name is not registered yet
        if (!(employee in employeeIndexMap)) {
            // Add the employee name with the file to the output
            employeeFilesOutput.push({ [employee]: [file] });

            // Map the employee name to its index inside the employeeFiles list
            employeeIndexMap[employee] = employeeFilesOutput.length - 1;
        } else {
            // If the employee name is already registered
            // Get its index from the employeeIndexMap
            const index = employeeIndexMap[employee];

            // Get the employee and their files from the index
            const employeeAndItsFiles = employeeFilesOutput[index];

            // Add the new file to the employee
            employeeAndItsFiles[employee].push(file);
        }
    }

    return employeeFilesOutput;
}

const inputFiles = [
    { 'letter.txt': 'Richard' },
    { 'paper.pdf': 'Jack' },
    { 'test.py': 'Johnny' },
    { 'numbers.docx': 'Jack' }
];

const result = groupEmployeeToItsFiles(inputFiles);
console.log(result);
