// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (if you have HTML/CSS/JS files in a 'public' folder)
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);
    // Here, you could process the form data, save it to a database, etc.
    res.send('Form submission received on the server side!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
