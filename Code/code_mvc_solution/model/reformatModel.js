class Reformatter {
    constructor() {
        this.employeeFilesOutput = [];
        this.employeeIndexMap = {};
    }

    reformat(fileList) {
        for (const fileInfo of fileList) {
            const [file, employee] = Object.entries(fileInfo)[0];

            if (!(employee in this.employeeIndexMap)) {
                this.employeeFilesOutput.push({ [employee]: [file] });
                this.employeeIndexMap[employee] = this.employeeFilesOutput.length - 1;
            } else {
                const index = this.employeeIndexMap[employee];
                const employeeAndItsFiles = this.employeeFilesOutput[index];
                employeeAndItsFiles[employee].push(file);
            }
        }

        return this.employeeFilesOutput;
    }
}

module.exports = Reformatter;
