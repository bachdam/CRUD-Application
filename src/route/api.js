import express from "express";
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", APIController.getAllUsers); //method GET -> Read Data
  router.post("/create-user", APIController.createNewUser); //method POST -> Create Data
  router.put("/update-user", APIController.updateUser); //method PUT -> UPDATE Data
  router.delete("/delete-user/:userId", APIController.deleteUser); //method DELETE -> DELETE Data

  return app.use("/api/v1", router);
};
export default initAPIRoute;
