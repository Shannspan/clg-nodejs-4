//create a local server using express that listens to port '3000'.

const express = require('express');
const app = express();
// const port = 3000;

// Build a response: 'hello world on' the route path
// http://localhost:3000/
// get request used

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

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

//modify middleware to add new route
//so that message is seen on http://localhost:3000/firstServer

// app.get('/firstServer', (req, res) => {
//     res.send('Hi There! This is my first route built using express framework. again')
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}/firstServer`)
// });

// modify middleware to add new route to accept /firstUser/:id
//and display message
// I will use a simple generator to create id 
//as this is more likely in real work space scenario
// I will use functions to contain blocks of code 
// that are relevent to each route (skill practice)
//will still have to comment out as using same port

// function firstUserRoute() {

// const firstUserID = Math.floor(Math.random() * 100);

// app.get('/firstUser/:id', (req, res) => {
//     res.send(`Hi there, your user ID is ${firstUserID}!`)
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}/firstUser/:id`)
// });
// }
// firstUserRoute();

//modify your code to handle a route that does not exist
//display result in 0.0.0.0:3000/firstServer

//function below will display desired error message 
// but not in port 0.0.0.0.3000
// adding 0.0.0.0 to port variable does not work - FIX REQUIRED

function firstServerRoute() {  

    const port = 3000;

// simple logic test: enter localhost:3000/test in browser
// which returns 404 status not found / cannot get test
// this error message does not bring up the 0.0.0.0 route

//check if file path is needed in app.get.
//may be more appropriate in catch try throw? 

    app.get(`/firstServer*`, (req, res) => {
        
        res.status(404).send(`Oops! We can't find the page you want right now - please click on the home button to try another search.`)
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}/firstServer/noRoute`)
    });
}

    // app.use((err, req, res, next) => {
    //     console.error(err.stack)
    //     res.status(404).send('Something broke!')
    //   })
    
    firstServerRoute();

//make sure nodemon is included in package.json "start"
//then in terminal $npm start
//any updates to myAPI.js will then appear in browser on refresh 