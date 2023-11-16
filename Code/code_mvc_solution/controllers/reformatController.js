const Reformatter = require("../model/reformatModel");

function group_employee_to_files(req,res){
    try {
        const fileContent = req.file.buffer.toString();
        const filelist = JSON.parse(fileContent);
        const reformatter = new Reformatter()
        const result = reformatter.reformat(filelist)
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: 'Invalid JSON format' });
    }
}

module.exports = {group_employee_to_files}