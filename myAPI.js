//create a local server using express that listens to port '3000'.

const express = require('express');
const app = express();
const port = 3000;

// Build a response: 'hello world on' the route path
// http://localhost:3000/

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

//in the terminal
// $ npm start 

// returns

// > clg-nodejs-4@1.0.0 start
// > node myAPI.js

// Example app listening on port 3000!

//then

//in browser type localhost:3000 (route URL)
//to see Hello World! message on screen
//any other path eg. localhost:3000/test
// will return 404 status not found / cannot get test

//make sure nodemon is included in package.json "start"
//then in terminal $npm start
//any updates to myAPI.js will then appear in browser on refresh 