// index.js - entry point for the application.
const express = require('express'); // bring in express - npm i express
const shortid = require('shortid'); // <<<<<<<<<<<<<< npm i shortid

const server = express();

let hubs = [];

server.use(express.json()); // <<<<<<<<<<<<<< add this line 

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running...' });
});

// write a GET /hello endpoint that returns an object like so: { hello: "Web PT 13" }
server.get('/hello', (req, res) => {
  res.status(200).json({ hello: 'Web PT 13' });
});

// write an endpoint to create Lessons
server.post('/api/hubs', (req, res) => {
  // client - axios.post(/api/hubs, data) <-- the data shows ups as the req.body on the server
  const hubInfo = req.body;

  // validate that the hubInfo is correct before saving
  hubInfo.id = shortid.generate();

  hubs.push(hubInfo);

  res.status(201).json(hubInfo);
});

// write an endpoint to view a list of Lessons
server.get('/api/hubs', (req, res) => {
  res.status(200).json(hubs);
});

const PORT = 5000;
server.listen(PORT, () => 
  console.log(`\n ** API on https://localhost: ${PORT} **\n`)
);

// to run the server use: node index.js
