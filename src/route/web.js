import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    // router.get('/', (req, res) => {
    //     res.render('./index.ejs');
    //   })
      
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userId',homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser)
    router.get('/about', (req, res) => {
        res.send("Welcome in!");
    })

    return app.use('/', router); //it let the file know that our website will start with the /
    
}

// module.export = initWebRoute;
export default initWebRoute;