// First Express Server

// Adds express to js file
const express = require('express');

const app = express();
const port = 3000;

// Writes to browser
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('Contact Me at: kpirabaharan3@gmail.com');
});

app.get('/about', (req, res) => {
  res.send('My Name is Keeshigan Pirabaharan and I Code.');
});

// Confirms in terminal of execution
app.listen(port, () => {
  console.log(`Example Server listening on port ${port}`);
});
