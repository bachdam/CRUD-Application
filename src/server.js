// const express = require('express') // or import('express')

// const path = require('path')

import express from "express";
import configViewEngine from "./configs/viewengine";
require('dotenv').config();

const app = express()
//const port = 3000 // random number for the gate that the server can run separatedly
const port = process.env.PORT || 3000; //backup ||
console.log(">>>> check port: ", port);



//route of a website: to orient the website (dinhj huong website)
// app.get('/', (req, res) => {
//   res.send("Hello World! I'm Bach") //respond with astring contains "..." after receiving the request
// })

configViewEngine(app);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'))
// })

app.get('/', (req, res) => {
  res.render('./index.ejs');
})

app.get('/about', (req, res) => {
    res.send("Welcome in!")
  })


//callback function
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})