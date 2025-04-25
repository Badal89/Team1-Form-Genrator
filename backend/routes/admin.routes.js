const express=require("express")
const router=express.Router();
const controllers=require("../controllers/admincontroller")
const middlewares=require("../middlewares/auth.middlewares")

router.get("/",middlewares.authorizeUser,controllers.getDashboard);

router.post("/form",middlewares.authorizeUser,controllers.createForm);

router.get("/form",middlewares.authorizeUser,controllers.getForm);

router.get("/responses",middlewares.authorizeUser,controllers.getResponses);

router.get("/responses/:id",middlewares.authorizeUser,controllers.getResponsesForUser);

module.exports=router;

