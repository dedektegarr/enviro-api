import { Router } from "express";
import accountController from "../../app/controllers/accountController.mjs";
import { isAuthenticated } from "../../middleware/authenticated.mjs";

const accountRouter = Router();

accountRouter.post(
  "/register",
  accountController.validation,
  accountController.register
);

accountRouter.post("/login", accountController.login);
accountRouter.get("/user", isAuthenticated, accountController.currentUser);

export default accountRouter;
