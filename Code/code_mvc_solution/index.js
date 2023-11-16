const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { group_employee_to_files } = require('./controllers/reformatController');


const app = express();
const port = 3000;

app.use(bodyParser.json());

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve the HTML file for the UI
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

// Handle file upload
app.post('/reformat', upload.single('file'),group_employee_to_files);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
