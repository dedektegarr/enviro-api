import { Router } from "express";
import accountController from "../../app/controllers/accountController.mjs";

const accountRouter = Router();

accountRouter.post("/register", accountController.register);

export default accountRouter;
