// Import the express library here
const express = require('express');
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// Get request

// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
// Open a call to `app.get()` below:
app.get('/expressions', (req, res, next) => {
  console.log(req);
  res.send(expressions);
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
