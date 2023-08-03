// const express = require('express') // or import('express')

// const path = require('path')

import express from "express";
import configViewEngine from "./configs/viewengine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
//import connection from "./configs/connectDB";
require('dotenv').config();
var morgan = require('morgan');

const app = express();

app.use((req, res, next) => { //the req, res, next are important in middleware, if the req is valid, then kepp going (it is in express)
  console.log(">>> Check run MiddleWare: ");
  console.log(req.method);
  next(); // after app.use, the program will stop so we need to use next() to continue it
})
app.use(morgan('combined'));
//const port = 3000 // random number for the gate that the server can run separatedly
const port = process.env.PORT || 8080; //backup ||
console.log(">>>> check port: ", port);



//route of a website: to orient the website (dinhj huong website)
// app.get('/', (req, res) => {
//   res.send("Hello World! I'm Bach") //respond with astring contains "..." after receiving the request
// })

//send data from client to server and get the data easliy
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);

//init api routwe
initAPIRoute(app);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'))
// })

//handle 404 not found with MiddleWare
app.use((req, res) => {
  return res.render('404.ejs'); //run the file 404.ejs
})




//callback function
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})