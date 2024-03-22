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


// Running this program in terminal will start the server and log the message to the console.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// dynamic routes
app.get('/expressions/:id', (req, res, next) => {
  const id = req.params.id;
  res.send(expressions[id]);
});


// the res object has a method called status() that can be used to send the appropriate status code.
// for example, if we want to send a 404 status code when a client requests a non-existent expression, we can use the following code:
app.get('/expressions/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const expressionToSend = expressions[id];
  if (expressionToSend) {
    res.send(expressionToSend);
  } else {
    // client receives a 404 status code
    res.status(404).send();
  }
});

// PUT request
// A PUT request updates an existing resource.
// A PUT request requires an identifier for the resource being updated.
app.put('/expressions/:id', (req, res, next) => {
  const id = Number(req.params.id);
  expressions[id] = req.query.expression;
  res.send(expressions[id]);
});



// POST request
// DELETE request
