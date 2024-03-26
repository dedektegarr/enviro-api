import { Router } from "express";
import accountController from "../../app/controllers/accountController.mjs";

const accountRouter = Router();

accountRouter.post(
  "/register",
  accountController.validation,
  accountController.register
);

accountRouter.post("/login", accountController.login);

export default accountRouter;
