import { Router } from "express";
import accountController from "../../app/controllers/accountController.mjs";

const accountRouter = Router();

accountRouter.post(
  "/register",
  accountController.validation,
  accountController.register
);

export default accountRouter;
