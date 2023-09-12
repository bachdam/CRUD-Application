import express from "express";

const configViewEngine = (app) => {
  //this app here is the express
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs"); // set the view engine to 'ejs'
  app.set("views", "./src/views"); //let express know where the 'ejs' is
};

export default configViewEngine;
